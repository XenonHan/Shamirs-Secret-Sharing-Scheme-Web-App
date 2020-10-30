import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FypBackendService } from './fyp-backend.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { MatButtonModule } from '@angular/material/button';


const moduleUsed = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  DefaultModule,
  BrowserAnimationsModule,
  MatButtonModule

]
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [ ...moduleUsed],
  exports: [...moduleUsed],
  providers: [FypBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
