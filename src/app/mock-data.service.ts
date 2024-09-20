import { Injectable } from '@angular/core';
import { CourseDetail } from './course-details/course-details.component';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  mockCourseDetails : CourseDetail[] = [{
    code: 'BA3102',
    name: 'Quantitative techniques',
    type: 'Program Elective',
    period: 'I',
    credits: [
      {
        name: 'Lecture',
        credits: 3
      },
      {
        name: 'Tutorial',
        credits: 0
      },
      {
        name: 'Practical',
        credits: 1
      },
      {
        name: 'Project',
        credits: 0
      }
    ],
    outComes: ['CO2', 'CO4', 'CO5', 'CO7', 'CO13', 'CO14'],
    mappedCourses: ['PO7', 'PO10', 'PO12', 'PO8']
  }];
}
