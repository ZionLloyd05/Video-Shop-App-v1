import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['selectedVideo']
})
export class VideoListComponent implements OnInit {

  public selectedVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedVid: Video){
    this.selectedVideo.emit(selectedVid);
  }

}
