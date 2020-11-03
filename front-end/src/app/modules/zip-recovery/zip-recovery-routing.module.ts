import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipRecoveryComponent } from './pages/zip-recovery/zip-recovery.component';

const routes: Routes = [
  { path: '', component: ZipRecoveryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipRecoveryRoutingModule { }
