import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { WrapperCardComponent } from '../shared-component/wrapper-card.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';

export type CourseDetail = {
  code : string,
  name : string,
  type : string,
  period : string,
  credits : {
      name: string,
      credits: number
  }[],
  outComes : string[],
  mappedCourses : string[]
};

interface DataItem {
  id: number;
  title: string;
}

interface FormValue {
  selected?: DataItem;
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [WrapperCardComponent, CommonModule, FormsModule, ReactiveFormsModule, MatExpansionModule, MatIconModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})

export class CourseDetailsComponent implements OnInit{
  courseDetails !: CourseDetail[];
  creditsCount : number[] = [];
  form!: FormGroup;
  step = 0;
  data: DataItem[] = [
    { id: 1, title: 'Course Details' }
  ];
  isMobile = false;

  constructor(private dataService: MockDataService, private fb: FormBuilder,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      selected: [this.data[0]]
    });
    this.courseDetails = this.dataService.mockCourseDetails;
    this.courseDetails.forEach(value => {
      let count = 0;
      value.credits.forEach(credit => {
        count += credit.credits;
      });
      this.creditsCount.push(count);
    });
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
    });
  }
  setStep(selected: any) {
    this.form.patchValue({ selected });
  }
}
