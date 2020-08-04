import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WebRequestService } from 'src/app/shared/services/web-request.service';
import { Course } from 'src/app/shared/model/course.model';

@Component({
  selector: 'app-individual-course-view',
  templateUrl: './individual-course-view.component.html',
  styleUrls: ['./individual-course-view.component.css'],
})
export class IndividualCourseViewComponent implements OnInit {
  panelOpenState = false;
  courseParamsPath: string;
  courseData: Course;
  startLearningLink: string;
  constructor(
    private route: ActivatedRoute,
    private webReqService: WebRequestService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.courseParamsPath = params['courseParamsPath'];
    });

    this.webReqService
      .get(`course/${this.courseParamsPath}`)
      .subscribe((data: Course) => {
        this.courseData = data;
        console.log(this.courseData);
        this.startLearningLink = `/course/${this.courseParamsPath}/${this.courseData.content[0].videos[0].videoUrl}`;
      });
    
    
  }

}
