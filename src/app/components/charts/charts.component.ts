import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: '#0BB4C8',
      type: 'line',
    },
    title: {
      style: {
        color: '#fff',
        fontWeight: 'bold',
      },
      text: 'Daily Sales',
    },
    legend: {
      itemStyle: {
        color: '#fff',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: ['0', '1', '2'],
      labels: {
        style: {
          color: 'white',
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: 'white',
        },
      },
    },

    series: [
      {
        data: [100, 285, 853],
        type: 'line',
        color: '#FE9F1A',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
