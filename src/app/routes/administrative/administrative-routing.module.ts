import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/login/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    redirectTo: 'products',
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

const config: ExtraOptions = {
  scrollPositionRestoration: 'top',
  onSameUrlNavigation: 'reload',
  initialNavigation: 'enabled',
  useHash: true
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
