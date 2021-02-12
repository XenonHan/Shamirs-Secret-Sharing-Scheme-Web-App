import { Component, OnInit } from '@angular/core';
import {faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { DeviceDetectorService } from 'ngx-device-detector';

declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  faChevronCircleDown=faChevronCircleDown;
  desktop = this.deviceType.isDesktop();
  constructor(  private deviceType: DeviceDetectorService) { }

  ngOnInit(): void {
  }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "arrows": true};

  slides = [
    {img: "http://placehold.it/350x150/000000"}
  ];

}

