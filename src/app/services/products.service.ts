import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

  getProducts() {
    this.http.get<IProducts[]>
  }

  getProduct(id:number) {

  }
}
