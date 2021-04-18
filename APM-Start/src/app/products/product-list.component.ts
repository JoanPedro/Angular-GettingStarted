import { Component, OnInit } from '@angular/core';
import { default as productData } from '../../api/products/products.json';
import { Product } from '../shared/product.model';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  products: Array<Product> = productData;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.products)
  }

  parseProduct: () => void = () => {
  }
}
