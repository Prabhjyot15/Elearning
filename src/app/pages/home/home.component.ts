import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/shared/services/web-request.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/model/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullName: string;
  courses: Course[];

  constructor(private webReqService: WebRequestService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    //if (this.authService.getUserId() === null && this.authService.getAccessToken() === null) {
      //this.router.navigate(['/home']);
    //}
    this.fullName = this.webReqService.getName();
    this.webReqService.get('home').subscribe((data: Course[]) => {
      this.courses = data;
      console.log(this.courses);
    });
  }

  onLogoutClicked() {
    this.authService.logout();
  }

  onCourseCardClicked(courseParamsPath: string) {
    this.router.navigate([`course/${courseParamsPath}`]);
  }


}
