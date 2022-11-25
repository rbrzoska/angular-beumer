import { HttpClient, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models';

@Injectable()
export class ProductsService {

  private _productsSubj = new BehaviorSubject<Product[] | null>(null);
  products$ = this._productsSubj.asObservable();

  constructor(private _http: HttpClient, @Inject(HTTP_INTERCEPTORS) interceptors: HttpInterceptor[]) {
  console.log(interceptors)}

  fetchProducts() {
    return this._http.get<Product[]>('http://localhost:3000/products').subscribe(p => {
    this._productsSubj.next(p)
  })
  }
}
