import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageEncryptionComponent } from './pages/image-encryption/image-encryption.component';


const routes: Routes = [
  { path: '', component: ImageEncryptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageEncryptionRoutingModule { }
