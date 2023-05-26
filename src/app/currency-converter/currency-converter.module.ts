import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConverterRoutingModule } from './currency-converter-routing.module';
import { PopularCurrenciesComponent } from './popular-currencies/popular-currencies.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    PopularCurrenciesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConverterRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class CurrencyConverterModule { }
