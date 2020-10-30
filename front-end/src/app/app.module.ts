import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FypBackendService } from './fyp-backend.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {TextEncrytionModule} from './modules/text-encrytion/text-encrytion.module'
import {TextRecoveryModule} from './modules/text-recovery/text-recovery.module'

// import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    TextEncrytionModule,
    TextRecoveryModule
  ],
  providers: [FypBackendService],
  bootstrap: [AppComponent],

})
export class AppModule { }
