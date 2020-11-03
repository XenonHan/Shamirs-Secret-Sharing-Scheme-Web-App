import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component'
import { HomepageComponent } from './modules/homepage/pages/homepage/homepage.component'
// import { TextEncryptionComponent } from './modules/text-encrytion/pages/text-encryption/text-encryption.component'
// import { TextRecoveryComponent } from './modules/text-recovery/pages/text-recovery/text-recovery.component';
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/homepage/homepage.module#HomepageModule'

      },
      {
        path: 'text-ecnryption',
        loadChildren: './modules/text-encrytion/text-encrytion.module#TextEncrytionModule'
        // component:TextEncryptionComponent

      }, 
      {
        path: 'text-recovery',
        loadChildren: './modules/text-recovery/text-recovery.module#TextRecoveryModule'
        // component:TextRecoveryComponent

      },
      {
        path: 'image-ecnryption',
        loadChildren: './modules/image-encryption/image-encryption.module#ImageEncryptionModule'
        // component:TextRecoveryComponent

      },
      {
        path: 'image-recovery',
        loadChildren: './modules/image-recovery/image-recovery.module#ImageRecoveryModule'
        // component:TextRecoveryComponent

      },
      {
        path: 'zip-ecnryption',
        loadChildren: './modules/zip-encryption/zip-encryption.module#ZipEncryptionModule'
        // component:TextRecoveryComponent

      },
      {
        path: 'zip-recovery',
        loadChildren: './modules/zip-recovery/zip-recovery.module#ZipRecoveryModule'
        // component:TextRecoveryComponent

      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
