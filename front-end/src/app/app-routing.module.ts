import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component'
import { HomepageComponent } from './modules/homepage/pages/homepage/homepage.component'
import { TextEncryptionComponent } from './modules/text-encrytion/pages/text-encryption/text-encryption.component'
import { TextRecoveryComponent } from './modules/text-recovery/pages/text-recovery/text-recovery.component';
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component:HomepageComponent

      },
      {
        path: 'text-ecnryption',
        component:TextEncryptionComponent

      },      {
        path: 'text-recovery',
        component:TextRecoveryComponent

      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
