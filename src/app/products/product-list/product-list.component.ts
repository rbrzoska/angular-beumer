import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { Product } from 'src/app/models';
import { ProductsService } from '../products.service';

@Component({
  selector: 'be-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products$!: Observable<Product[] | null>;

  constructor(private _productsService: ProductsService) {
  this.products$ = this._productsService.products$;
  this._productsService.fetchProducts();
  }

  handleClick() {
    console.log('click')
  }
}
