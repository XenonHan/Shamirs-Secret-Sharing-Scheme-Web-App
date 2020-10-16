import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {DefaultComponent} from './default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  bootstrap: [DefaultComponent]
})
export class DefaultModule { }
