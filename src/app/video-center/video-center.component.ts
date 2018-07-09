import { Http } from '@angular/http';
import { VideoService } from './../video.service';
import { Video } from './../video';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: any[];

  selectedVideo: Video;

  constructor( private _videoService : VideoService) { 
    
  }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(response => {
        this.videos = response;
      });
  }

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
