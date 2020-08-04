import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/shared/model/course.model';
import { WebRequestService } from 'src/app/shared/services/web-request.service';
import { ActivatedRoute, Params } from '@angular/router';
import videojs from 'video.js';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css'],
  styles: [
    `
      ::ng-deep .specific-class > .mat-action-row:after {
        color: black;
      }
    `,
  ],
})
export class VideoSectionComponent implements OnInit {
  panelOpenState = false;
  courseParamsPath: string;
  videoData: Video;
  videoHeading: string;
  videoUrl: string;
  player: videojs.Player;

  constructor(
    private route: ActivatedRoute,
    private webReqService: WebRequestService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.courseParamsPath = params['courseParamsPath'];
    });

    this.webReqService
      .get(`course/${this.courseParamsPath}/videos`)
      .subscribe((videoData: Video) => {
        this.videoData = videoData;
        this.videoUrl = videoData.content[0].videos[0].videoUrl;
        this.videoHeading = videoData.content[0].videos[0].videoTitle;
      });
  }

  onVideoTitleClicked(videoHeading: string, videoUrl: string) {
    console.log(videoUrl);
    this.videoUrl = videoUrl;
    this.videoHeading = videoHeading;
    this.player.reset().src({ src: String(this.videoUrl) });
  }
}
