import { Component, Optional } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'be-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  constructor(@Optional() private parent: ProductListComponent){
  if (!parent) {
   console.error('ProductItemComponent powinien byc uzyty tylko w ProductListComponent')
  }
}
}
