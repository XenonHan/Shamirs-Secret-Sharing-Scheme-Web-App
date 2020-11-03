import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipEncryptionComponent } from './pages/zip-encryption/zip-encryption.component';

const routes: Routes = [
  { path: '', component: ZipEncryptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipEncryptionRoutingModule { }
