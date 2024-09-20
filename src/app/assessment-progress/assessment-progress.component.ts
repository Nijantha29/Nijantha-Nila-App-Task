import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { WrapperCardComponent } from '../shared-component/wrapper-card.component';
 
@Component({
  selector: 'app-assessment-progress',
  imports: [BaseChartDirective, WrapperCardComponent],
  standalone: true,
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.css']  // Fixed to `styleUrls` for array
})
export class AssessmentProgressComponent {
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          filter: (legendItem: { text: string }, data: any) => legendItem.text !== '' // Hide empty labels
        }
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'x axis'
        }
      },
      y: {
        title: {
          display: false,
          text: 'y axis'
        },
        min: 0,    // Define minimum value for the y-axis
        max: 100,  // Define maximum value for the y-axis
        ticks: {
          stepSize: 25,  // Scale in increments of 25%
          callback: (tickValue: string | number) => {
            if (typeof tickValue === 'number') {
              return tickValue + '%';  // Display as percentage if it's a number
            }
            return tickValue;  // Return as is if it's a string
          }
        }
      }
    }
  };
 
  public barChartLabels: string[] = ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [25, 80, 70, 55, 80], backgroundColor: '#91B07C', label: 'Completed' },
    { data: [70, 35, 40, 80], backgroundColor: '#91B07C', label: '' },
    { data: [50, 73, 23, 0], backgroundColor: '#91B07C', label: '' },
    { data: [0, 80, 0, 0], backgroundColor: '#91B07C', label: '' },
    { data: [0, 25, 0, 0], backgroundColor: '#91B07C', label: '' },
    { data: [0, 55, 0, 0], backgroundColor: '#91B07C', label: '' },
    { data: [100, 100, 0, 0], backgroundColor: '#D6D9DD', label: '' },
    { data: [0, 100, 0, 0], backgroundColor: '#D6D9DD', label: 'Pending' },
    { data: [0, 100, 0, 0], backgroundColor: '#D6D9DD', label: '' },
  ];
}