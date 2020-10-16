import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEncrytionRoutingModule } from './text-encrytion-routing.module';
import { TextEncryptionComponent } from './pages/text-encryption/text-encryption.component';


@NgModule({
  declarations: [TextEncryptionComponent],
  imports: [
    CommonModule,
    TextEncrytionRoutingModule
  ]
})
export class TextEncrytionModule { }
