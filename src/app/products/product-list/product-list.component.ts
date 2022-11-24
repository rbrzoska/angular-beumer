import { Component, Inject } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'be-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  constructor(private _auth: AuthService) {}
}
