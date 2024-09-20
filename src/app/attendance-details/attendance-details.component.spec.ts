import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceDetailsComponent } from './attendance-details.component';
import { Chart, registerables } from 'chart.js';
import { WrapperCardComponent } from '../shared-component/wrapper-card.component';

describe('AttendanceDetailsComponent', () => {
  let component: AttendanceDetailsComponent;
  let fixture: ComponentFixture<AttendanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceDetailsComponent, WrapperCardComponent],
    }).compileComponents();

    Chart.register(...registerables);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Clean up the chart after each test
    if (component.lineChart) {
      component.lineChart.destroy();
      component.lineChart = null; // Reset chart reference
    }
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the line chart on ngOnInit', () => {
    spyOn(component, 'createLineChart').and.callThrough();
    component.ngOnInit();
    expect(component.createLineChart).toHaveBeenCalled();
    expect(component.lineChart).toBeDefined();
  });

  it('should have correct chart data', () => {
    component.createLineChart();
    expect(component.lineChart.data.labels).toEqual(['0', '1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '2/9', '9/9', '16/9', '23/9', '30/9', '14/10', '21/10']);
    expect(component.lineChart.data.datasets[0].data).toEqual([null, 25, 50, 20, 75, 50, 60, 70, 50, 55, 75, 50, 80, 90, 75]);
  });

  it('should have correct chart options', () => {
    component.createLineChart();
    expect(component.lineChart.options.scales.y.min).toBe(0);
    expect(component.lineChart.options.scales.y.max).toBe(100);
  });
});
