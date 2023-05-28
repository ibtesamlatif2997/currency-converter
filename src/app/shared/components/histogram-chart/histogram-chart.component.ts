import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

import { FixerService } from 'src/app/core/services/fixerService';

import * as moment from 'moment';

@Component({
  selector: 'app-histogram-chart',
  templateUrl: './histogram-chart.component.html',
  styleUrls: ['./histogram-chart.component.scss']
})
export class HistogramChartComponent implements OnInit {
  @Input("fromCurrency")fromCurrency:string = "";
  @Input("toCurrency")toCurrency:string = "";


  chartOption: EChartsOption = {}

  constructor(
    private fixer: FixerService
  ) { }

  ngOnInit(): void {
    this.getHistoricData();
  }

  ngOnChanges(change: any){
    if(change.toCurrency.currentValue != change.toCurrency.previousValue){
      this.getHistoricData();
    }
  }

  async getHistoricData(){
    let months:string[] =[];
    let rates: number[] = [];

    for(let month = 1; month <= 12; month++){
      const date = moment().subtract(month, 'months').endOf('month').format("YYYY-MM-DD")

      const data = await this.fixer.getRates(date);

      months.push(moment(date).format('MMMM'))

      let rate: number = 0;
      if(data[this.toCurrency] && data[this.fromCurrency]){
        rate = parseFloat((data[this.toCurrency]/data[this.fromCurrency]).toFixed(2));
      }

      rates.push(rate);
    }

    this.chartOption = {
      xAxis: {
        type: 'category',
        data: months,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: rates,
          type: 'line',
        },
      ],
    };

  }
}
