import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextEncryptionComponent } from './pages/text-encryption/text-encryption.component';


const routes: Routes = [
  { path: '', component: TextEncryptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextEncrytionRoutingModule { }
