import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRecoveryRoutingModule } from './image-recovery-routing.module';
import { ImageRecoveryComponent } from './pages/image-recovery/image-recovery.component';


@NgModule({
  declarations: [ImageRecoveryComponent],
  imports: [
    CommonModule,
    ImageRecoveryRoutingModule
  ]
})
export class ImageRecoveryModule { }
