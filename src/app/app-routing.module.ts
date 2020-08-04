import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { IndividualCourseViewComponent } from './pages/individual-course-view/individual-course-view.component';
import { VideoSectionComponent } from './pages/video-section/video-section.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'signup',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'course/:courseParamsPath',
    component: IndividualCourseViewComponent,
  },
  {
    path: 'course/:courseParamsPath/learn',
    component: VideoSectionComponent,
  },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
