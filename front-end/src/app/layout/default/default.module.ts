import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {DefaultComponent} from './default.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  bootstrap: [DefaultComponent]
})
export class DefaultModule { }
