import { Product } from './../shared/models/product.model';
import { default as productData } from '../../api/products/products.json';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Array<Product> {
    return productData;
  }
}
