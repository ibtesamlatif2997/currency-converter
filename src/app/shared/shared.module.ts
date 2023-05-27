import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PopularCurrenciesComponent } from './components/popular-currencies/popular-currencies.component';
import { ConverterPanelComponent } from './components/converter-panel/converter-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    PopularCurrenciesComponent,
    ConverterPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PopularCurrenciesComponent,
    ConverterPanelComponent
  ]
})
export class SharedModule { }
