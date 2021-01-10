import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/login/shared/auth.guard';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ProductListComponent
  },
  {
    path: 'new',
    canActivate: [AuthGuard],
    component: ProductFormComponent
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuard],
    component: ProductFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
