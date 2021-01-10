import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './routes/auth/login/shared/auth.guard';

import { AdminLayoutComponent } from './routes/shared/layout/administrative/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './routes/shared/layout/auth/auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'administrative',
        loadChildren: () => import('./routes/administrative/administrative.module').then(m => m.AdministrativeModule)
      },
    ],
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    loadChildren: () => import('./routes/auth/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
