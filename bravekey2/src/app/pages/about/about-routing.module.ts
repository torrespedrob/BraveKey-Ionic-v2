import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('../form/form.module').then(m => m.FormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule { }
