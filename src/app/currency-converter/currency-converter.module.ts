import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConverterRoutingModule } from './currency-converter-routing.module';
import { PopularCurrenciesComponent } from './popular-currencies/popular-currencies.component';
@NgModule({
  declarations: [
    HomeComponent,
    PopularCurrenciesComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class CurrencyConverterModule { }
