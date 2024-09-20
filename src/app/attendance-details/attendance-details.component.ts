import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { WrapperCardComponent } from '../shared-component/wrapper-card.component';
 
@Component({
  selector: 'app-attendance-details',
  standalone: true,
  imports: [WrapperCardComponent],
  templateUrl: './attendance-details.component.html',
  styleUrls: ['./attendance-details.component.css'],
})
export class AttendanceDetailsComponent implements OnInit {
 
  public lineChart: any;
 
  ngOnInit() {
    // Register the chart elements
    Chart.register(...registerables);
 
    // Create the chart
    this.createLineChart();
  }
 
  createLineChart() {
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['0', '1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '2/9', '9/9', '16/9', '23/9', '30/9', '14/10', '21/10'],
        datasets: [{
          data: [null, 25, 50, 20, 75, 50, 60, 70, 50, 55, 75, 50, 80, 90, 75], // Use percentage values directly
          label: 'Percentage',
          borderColor: 'violet',
          pointBackgroundColor: 'black',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fill: false,
          tension: 0,
          borderWidth: 1
        }],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Attendance'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Percentage'
            },
            min: 0, // Set the minimum value for y-axis
            max: 100, // Adjust max for percentage values
            ticks: {
              stepSize: 25, // Adjust step size to match your data (25, 50, 75, 100)
              callback: function(value: string | number) {
                return value + '%'; // Add a '%' symbol to the tick labels
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }  
}