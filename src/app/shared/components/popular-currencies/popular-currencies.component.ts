import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PopularCurrencies } from 'src/app/core/types/types';

@Component({
  selector: 'app-popular-currencies',
  templateUrl: './popular-currencies.component.html',
  styleUrls: ['./popular-currencies.component.scss']
})
export class PopularCurrenciesComponent implements OnInit {
  @Input('popular-currencies') public popularCurrencies: PopularCurrencies[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
