import { Component, OnInit } from '@angular/core';
import { FixerService } from 'src/app/core/services/fixerService';
import { Currency, PopularCurrencies, convertEvent } from 'src/app/core/types/types';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  popularCurrencies: PopularCurrencies[] = []
  isDetailed: boolean = false;

  fromCurrency:string = "";
  toCurrency:string = "";
  currentCurrency:any = {};
  currencies:any = [];

  constructor(
    private fixer: FixerService,
    private _route: ActivatedRoute,
    private _router: Router
  ){

  }

  ngOnInit(): void {
    this._route.queryParams
    .subscribe((params:any) => {
      this.isDetailed = (params.isDetailed === "true");

      if(params.from){
        this.fromCurrency = params.from;
      }

      if(params.to){
        this.toCurrency = params.to;
      }
    });

    this.getCurrencies()
  }

  async getCurrencies(){
    const data = await this.fixer.getCurrencies();    
    this.currentCurrency = data[this.fromCurrency]

    for (const property in data) {
      this.currencies.push({
        value:  property,
        name: data[property]
      });
    }
  }

  async convertValues($event: convertEvent){
    this.popularCurrencies = [];
    this.fromCurrency = $event.from;
    this.toCurrency = $event.to;

    const rates = await this.fixer.getRates();

    for (const property in rates) {
      this.popularCurrencies.push({
        value: (rates[property]/rates[$event.from]) * $event.amount,
        currency: property
      });
    }

    this.popularCurrencies.splice(9)
  }

  openHome(){
    this._router.navigate([""], {
      relativeTo: this._route,
      queryParams: {
        isDetailed: false
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // do not trigger navigation
    });
  }
}
