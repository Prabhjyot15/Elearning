import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Bell, User, PlayCircle, Home, Music, File, Upload, Youtube } from 'angular-feather/icons';


const icons = {
  Bell,
  User,
  Home,
  Music,
  File,
  PlayCircle,
  Upload,
  Youtube
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
