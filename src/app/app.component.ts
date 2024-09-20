import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CommonModule } from '@angular/common';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { AssessmentProgressComponent } from './assessment-progress/assessment-progress.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseDetailsComponent, CommonModule, AttendanceDetailsComponent, AssessmentProgressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nila';
}