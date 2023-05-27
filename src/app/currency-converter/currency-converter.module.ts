import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ConverterRoutingModule } from './currency-converter-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ConverterRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class CurrencyConverterModule { }
