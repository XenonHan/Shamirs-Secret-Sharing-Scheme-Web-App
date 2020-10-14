import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FypFrontendRoutingModule } from './fyp-frontend-routing.module';
import { FypIndexComponent } from './pages/fyp-index/fyp-index.component';


@NgModule({
  declarations: [FypIndexComponent],
  imports: [
    CommonModule,
    FypFrontendRoutingModule
  ]
})
export class FypFrontendModule { }
