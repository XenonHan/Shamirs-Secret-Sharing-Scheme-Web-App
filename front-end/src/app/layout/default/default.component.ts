import { Component, OnInit } from '@angular/core';
import {faFileWord,faHome,faLock,faImages,faFileImage } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  faFileWord = faFileWord;
  faLock=faLock;
  faHome=faHome;
  faImages=faImages;
  faFileImage=faFileImage;
  constructor() { }

  ngOnInit(): void {
  }

}
