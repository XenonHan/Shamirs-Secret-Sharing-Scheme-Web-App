import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageRecoveryComponent } from './pages/image-recovery/image-recovery.component';

const routes: Routes = [
  { path: '', component: ImageRecoveryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRecoveryRoutingModule { }
