import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/model/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() coursesInfo: Course;

  constructor() { }

  ngOnInit(): void {
    console.log("in Crad");
    console.log(this.coursesInfo);
  }

}
