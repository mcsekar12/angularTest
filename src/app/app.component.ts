import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTest';
  data;

  itemID;
  constructor(private service: TestServiceService) {}
  ngAfterViewInit() {
    this.makeChart();
  }
  getData() {
    this.service.getCarrierLink().subscribe((res: any) => {
      this.data = res.data;
    });
  }
  makeChart() {
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        category: 'Research',
        value: 450,
      },
      {
        category: 'Marketing',
        value: 1200,
      },
      {
        category: 'Distribution',
        value: 1850,
      },
      {
        category: 'Research1',
        value: 450,
      },
      {
        category: 'Marketing1',
        value: 1200,
      },
      {
        category: 'Distribution1',
        value: 1850,
      },
      {
        category: 'Research2',
        value: 450,
      },
      {
        category: 'Marketing2',
        value: 1200,
      },
      {
        category: 'Distribution2',
        value: 1850,
      },
      {
        category: 'Research3',
        value: 450,
      },
      {
        category: 'Marketing3',
        value: 1200,
      },
      {
        category: 'Distribution3',
        value: 1850,
      },
      {
        category: 'Research4',
        value: 450,
      },
      {
        category: 'Marketing4',
        value: 1200,
      },
      {
        category: 'Distribution4',
        value: 1850,
      },
      {
        category: 'Research5',
        value: 450,
      },
      {
        category: 'Marketing5',
        value: 1200,
      },
      {
        category: 'Distribution5',
        value: 1850,
      },
      {
        category: 'Research6',
        value: 450,
      },
      {
        category: 'Marketing6',
        value: 1200,
      },
      {
        category: 'Distribution6',
        value: 1850,
      },
      {
        category: 'Research7',
        value: 450,
      },
      {
        category: 'Marketing7',
        value: 1200,
      },
      {
        category: 'Distribution7',
        value: 1850,
      },
      {
        category: 'Research8',
        value: 450,
      },
      {
        category: 'Marketing8',
        value: 1200,
      },
      {
        category: 'Distribution8',
        value: 1850,
      },
      {
        category: 'Research9',
        value: 450,
      },
      {
        category: 'Marketing9',
        value: 1200,
      },
      {
        category: 'Distribution9',
        value: 1850,
      },
      {
        category: 'Research19',
        value: 450,
      },
      {
        category: 'Marketing19',
        value: 1200,
      },
      {
        category: 'Distribution19',
        value: 1850,
      },
      {
        category: 'Research29',
        value: 450,
      },
      {
        category: 'Marketing29',
        value: 1200,
      },
      {
        category: 'Distribution29',
        value: 1850,
      },
      {
        category: 'Research39',
        value: 450,
      },
      {
        category: 'Marketing39',
        value: 1200,
      },
      {
        category: 'Distribution39',
        value: 1850,
      },
      {
        category: 'Research49',
        value: 450,
      },
      {
        category: 'Marketing49',
        value: 1200,
      },
      {
        category: 'Distribution49',
        value: 1850,
      },
      {
        category: 'Research59',
        value: 450,
      },
      {
        category: 'Marketing69',
        value: 1200,
      },
      {
        category: 'Distribution69',
        value: 1850,
      },
      {
        category: 'Marketing69',
        value: 1200,
      },
      {
        category: 'Distribution169',
        value: 1850,
      },
      {
        category: 'Marketing169',
        value: 1200,
      },
      {
        category: 'Distribution169',
        value: 1850,
      },
      {
        category: 'Marketing269',
        value: 1200,
      },
      {
        category: 'Distribution269',
        value: 1850,
      },
      {
        category: 'Marketing369',
        value: 1200,
      },
      {
        category: 'Distribution369',
        value: 1850,
      },
      {
        category: 'Marketing469',
        value: 1200,
      },
      {
        category: 'Distribution469',
        value: 1850,
      },
      {
        category: 'Marketing569',
        value: 1200,
      },
      {
        category: 'Distribution569',
        value: 1850,
      },
      {
        category: 'Marketing669',
        value: 1200,
      },
      {
        category: 'Distribution669',
        value: 1850,
      },
      {
        category: 'Marketing769',
        value: 1200,
      },
      {
        category: 'Distribution769',
        value: 1850,
      },
      {
        category: 'Marketing697',
        value: 1200,
      },
      {
        category: 'Distribution697',
        value: 1850,
      },
    ];

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    // categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.events.on('over', (ev: any) => {
      const point = categoryAxis.categoryToPoint(ev.target.dataItem.category);
      chart.cursor.triggerMove(point, 'soft');
    });

    categoryAxis.renderer.labels.template.events.on('out', (ev: any) => {
      const point = categoryAxis.categoryToPoint(ev.target.dataItem.category);
      chart.cursor.triggerMove(point, 'none');
    });

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    series.tooltipText = '{categoryX}: {valueY}';

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.disabled = true;
    chart.cursor.lineX.disabled = true;
  }
}
