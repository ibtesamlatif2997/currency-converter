import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PopularCurrenciesComponent } from './components/popular-currencies/popular-currencies.component';
import { ConverterPanelComponent } from './components/converter-panel/converter-panel.component';
import { FormsModule } from '@angular/forms';
import { HistogramChartComponent } from './components/histogram-chart/histogram-chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PopularCurrenciesComponent,
    ConverterPanelComponent,
    HistogramChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PopularCurrenciesComponent,
    ConverterPanelComponent,
    HistogramChartComponent
  ]
})
export class SharedModule { }
