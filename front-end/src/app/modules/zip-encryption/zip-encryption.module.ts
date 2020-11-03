import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZipEncryptionRoutingModule } from './zip-encryption-routing.module';
import { ZipEncryptionComponent } from './pages/zip-encryption/zip-encryption.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FlexLayoutModule } from "@angular/flex-layout";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ZipEncryptionComponent],
  imports: [
    CommonModule,
    ZipEncryptionRoutingModule,
    MatButtonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule ,
    MatDividerModule,
    FlexLayoutModule,
    ClipboardModule,
    FontAwesomeModule
  ]
})
export class ZipEncryptionModule { }
