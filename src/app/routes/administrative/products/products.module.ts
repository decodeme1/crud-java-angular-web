import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductsRoutingModule } from './product-routing.module'
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [ProductFormComponent, ProductListComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ProductsModule { }
