import { Component, Inject } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Product } from 'src/app/models';

@Component({
  selector: 'be-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Product[] = [
    { id: '1', price: 14, title: 'Prod1', description: 'bfdsfdslkfsdf' },
    { id: '2', price: 0.99, title: 'Prod2', description: 'asasdasd' },
    { id: '3', price: 10.99, title: 'Prod3' },
    { id: '4', price: 1.98, title: 'Prod4' },
    { id: '6', price: 1.98, title: 'Prod6' },
    { id: '5', price: 5, title: 'Prod5', description: '13424324324324' }
  ];


  constructor(private _auth: AuthService) {}

  handleClick() {
    console.log('click')
  }
}
