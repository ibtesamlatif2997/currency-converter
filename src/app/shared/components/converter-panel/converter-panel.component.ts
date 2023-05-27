import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FixerService } from 'src/app/core/services/fixerService';
import * as moment from 'moment';
import { Currency } from 'src/app/core/types/types';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss']
})
export class ConverterPanelComponent implements OnInit {
  // @Input('isDetailed') isDetailed: boolean = false;

  @Output('converted') converted = new EventEmitter();

  currencies: Currency[] = [];
  fromCurrency: string = "EUR";
  toCurrency: string = "USD";
  isDetailed:boolean = false;
  amount: number = 0;

  currentRates:any;
  convertedValue:string = "";
  convertedAmount:string = "";

  constructor(
    private fixer: FixerService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
  }

  ngOnInit(): void {
    debugger;
    this.getCurrencies();
    this.getCurrentRates();

    this._route.queryParams
    .subscribe((params:any) => {
      if(params.from){
        this.fromCurrency = params.from;
      }
      if(params.to){
        this.toCurrency = params.to;
      }

      this.isDetailed = (params.isDetailed === "true");
      
    });
  }

  async getCurrencies(){
    const data = await this.fixer.getCurrencies();    
    for (const property in data) {
      this.currencies.push({
        value:  property,
        name: data[property]
      });
    }
  }

  async getCurrentRates(){
    const date = moment().format("YYYY-MM-DD");
    this.currentRates = await this.fixer.getRates(date);
    console.log(this.currentRates)
  }

  currencyChanged(){
    if(!(this.fromCurrency && this.toCurrency)){
      return;
    }

    const converted = this.currentRates[this.toCurrency]/this.currentRates[this.fromCurrency];
    const convertedAmount = converted * this.amount;

    this.convertedValue = `1.00 ${this.fromCurrency} = ${converted.toFixed(2)} ${this.toCurrency}`
    this.convertedAmount = `${convertedAmount.toFixed(2)} ${this.toCurrency}`;

    this.converted.emit({
      amount: this.amount,
      from: this.fromCurrency,
      to: this.toCurrency
    });
  }

  swapCurrencies(){
    const swapper = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = swapper;
  }

  openDetails(){
    this._router.navigate([""], {
      relativeTo: this._route,
      queryParams: {
        from: this.fromCurrency,
        to: this.toCurrency,
        amount: this.amount,
        isDetailed: true
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // do not trigger navigation
    });
  }

}