import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEncrytionRoutingModule } from './text-encrytion-routing.module';
import { TextEncryptionComponent } from './pages/text-encryption/text-encryption.component';
import{MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [TextEncryptionComponent],
  imports: [
    CommonModule,
    TextEncrytionRoutingModule,
    MatButtonModule

  ],
})
export class TextEncrytionModule { }
