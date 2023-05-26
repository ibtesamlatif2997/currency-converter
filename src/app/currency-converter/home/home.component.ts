import { Component, OnInit } from '@angular/core';
import { FixerService } from 'src/app/core/services/fixerService';

type Currency = {
  name: string,
  value: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
