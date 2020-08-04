import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { WebRequestService } from 'src/app/shared/services/web-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public userService: UserService,
    private authService: AuthService,
    private webReqService: WebRequestService,
    private router: Router) { }

  showSucessMessage: boolean;
  serverErrorMessages: string;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
  }

  onSignupClicked(fullName: string,email: string,password: string) {
    console.log(email);
    console.log(password);
    this.authService.signup(email, password, fullName).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        // we have loggen in successfully
        this.webReqService.setName(res.body.fullName);
        this.router.navigate(['/home']);
      }
      console.log(res);
    });
  }
}
