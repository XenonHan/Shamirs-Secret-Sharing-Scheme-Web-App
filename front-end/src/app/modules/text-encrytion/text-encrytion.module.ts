import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEncrytionRoutingModule } from './text-encrytion-routing.module';
import { TextEncryptionComponent } from './pages/text-encryption/text-encryption.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [TextEncryptionComponent],
  imports: [
    CommonModule,
    TextEncrytionRoutingModule,
    MatButtonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule ,
    MatDividerModule,
    FlexLayoutModule,
    ClipboardModule
    
  ],
})
export class TextEncrytionModule { }
