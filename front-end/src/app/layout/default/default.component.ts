import { Component, OnInit } from '@angular/core';
import {faFileWord,faHome,faLock,faImages,faFileImage,faClone,faFileArchive,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  faFileWord = faFileWord;
  faClone=faClone;
  faFileArchive=faFileArchive;
  faLock=faLock;
  faHome=faHome;
  faImages=faImages;
  faFileImage=faFileImage;
  faEllipsisV=faEllipsisV;
  showBar:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
