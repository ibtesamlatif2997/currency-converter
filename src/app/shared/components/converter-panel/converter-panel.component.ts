import { Component, OnInit } from '@angular/core';
import { FixerService } from 'src/app/core/services/fixerService';

type Currency = {
  name: string,
  value: string
}

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss']
})
export class ConverterPanelComponent implements OnInit {

  currencies: Currency[] = [];
  fromCurrency: string = "EUR";
  toCurrency: string = "USD";

  constructor(
    private fixer: FixerService
  ) { 
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  async getCurrencies(){
    const data = await this.fixer.getCurrencies();    
    for (const property in data) {
      this.currencies.push({
        value:  property,
        name: data[property]
      });

      console.log("currencies", this.currencies);

    }
  }
}
