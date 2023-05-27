import { Component, OnInit } from '@angular/core';
import { FixerService } from 'src/app/core/services/fixerService';
import { PopularCurrencies, convertEvent } from 'src/app/core/types/types';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  popularCurrencies: PopularCurrencies[] = [
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // },
    // {
    //   name: "abc",
    //   value: 5255.25555
    // }
  ]

  constructor(
    private fixer: FixerService
  ){

  }

  ngOnInit(): void {
  }

  async convertValues($event: convertEvent){
    this.popularCurrencies = [];
    const rates = await this.fixer.getRates();

    for (const property in rates) {
      this.popularCurrencies.push({
        value: (rates[property]/rates[$event.from]) * $event.amount,
        currency: property
      });
    }

    // this.popularCurrencies.sort((a,b) => {
    //   return b.value - a.value
    // })

    this.popularCurrencies.splice(9)
  }

}
