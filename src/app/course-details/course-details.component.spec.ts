import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetailsComponent } from './course-details.component';
import { MockDataService } from '../mock-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { of } from 'rxjs';

class MockBreakpointObserver {
  observe() {
    return of({ matches: false });
  }
}

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;
  let mockDataService: MockDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CourseDetailsComponent, // Import the standalone component here
        ReactiveFormsModule,
        MatExpansionModule,
      ],
      providers: [
        { provide: MockDataService, useValue: { mockCourseDetails: [] } },
        { provide: BreakpointObserver, useClass: MockBreakpointObserver }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    mockDataService = TestBed.inject(MockDataService);
    
    // Provide mock data with explicit typing
    mockDataService.mockCourseDetails = [
      {
        code: 'CS101',
        name: 'Computer Science 101',
        type: 'Core',
        period: 'Semester 1',
        credits: [{ name: 'Lecture', credits: 3 }],
        outComes: ['Understand basics of computer science'],
        mappedCourses: []
      }
    ];
    
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and course details on init', () => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
    expect(component.courseDetails.length).toBeGreaterThan(0);
    expect(component.creditsCount.length).toBeGreaterThan(0);
  });

  it('should set selected course detail in the form', () => {
    component.ngOnInit();
    const selectedCourse = component.data[0];
    component.setStep(selectedCourse);
    expect(component.form.value.selected).toEqual(selectedCourse);
  });

  it('should observe breakpoint changes', () => {
    component.ngOnInit();
    expect(component.isMobile).toBeFalse(); // Initially should be false
  });
});
