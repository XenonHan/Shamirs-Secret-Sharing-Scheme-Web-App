import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SlickCarouselModule,
    FontAwesomeModule
  ]
})
export class HomepageModule { }
