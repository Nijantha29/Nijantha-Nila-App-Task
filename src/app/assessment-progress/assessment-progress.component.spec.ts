import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessmentProgressComponent } from './assessment-progress.component';

describe('AssessmentProgressComponent', () => {
  let component: AssessmentProgressComponent;
  let fixture: ComponentFixture<AssessmentProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct chart options', () => {
    expect(component.barChartOptions).toBeDefined();
    expect(component.barChartOptions.plugins?.legend?.display).toBeTrue();
  });

  it('should have correct chart labels', () => {
    expect(component.barChartLabels).toEqual(['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva']);
  });

  it('should have correct chart type', () => {
    expect(component.barChartType).toBe('bar');
  });

  it('should have correct chart data', () => {
    expect(component.barChartData.length).toBe(9);
    expect(component.barChartData[0].data).toEqual([25, 80, 70, 55, 80]);
    expect(component.barChartData[1].data).toEqual([70, 35, 40, 80]);
  });
});
