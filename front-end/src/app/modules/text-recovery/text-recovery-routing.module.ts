import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextRecoveryComponent } from './pages/text-recovery/text-recovery.component';
const routes: Routes = [
  { path: '', component: TextRecoveryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextRecoveryRoutingModule { }
