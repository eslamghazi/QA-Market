import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
SharedModule,

  ]
})
export class ProductsModule { }
