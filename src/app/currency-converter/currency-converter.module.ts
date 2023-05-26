import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConverterRoutingModule } from './currency-converter-routing.module';

@NgModule({
  declarations: [
    HomeComponent
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
