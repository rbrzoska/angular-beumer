import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from './products.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ ProductsService ]
})
export default class ProductsModule { }
