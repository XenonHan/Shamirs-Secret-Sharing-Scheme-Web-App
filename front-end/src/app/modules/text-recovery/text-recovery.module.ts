import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextRecoveryRoutingModule } from './text-recovery-routing.module';
import { TextRecoveryComponent } from './pages/text-recovery/text-recovery.component';


@NgModule({
  declarations: [TextRecoveryComponent],
  imports: [
    CommonModule,
    TextRecoveryRoutingModule
  ]
})
export class TextRecoveryModule { }
