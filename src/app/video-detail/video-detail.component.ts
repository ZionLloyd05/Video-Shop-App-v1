import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {

  editTitle : Boolean = false;

  constructor() { }

  ngOnInit() {
  } 

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(): void {
    this.editTitle = true;
  }
}
