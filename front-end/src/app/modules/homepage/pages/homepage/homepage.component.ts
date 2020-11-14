import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "arrows": true};

  slides = [
    {img: "http://placehold.it/350x150/000000"}
  ];

}

