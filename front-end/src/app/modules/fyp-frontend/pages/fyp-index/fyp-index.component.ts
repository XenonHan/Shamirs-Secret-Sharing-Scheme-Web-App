import { Component, OnInit } from '@angular/core';
import {FypBackendService} from '../../../../fyp-backend.service'

@Component({
  selector: 'app-fyp-index',
  templateUrl: './fyp-index.component.html',
  styleUrls: ['./fyp-index.component.css']
})
export class FypIndexComponent implements OnInit {

  url:string="the url we will use in backend such as htt://localhost:8080";

  constructor() { }

  ngOnInit(): void {
  }

  

}
