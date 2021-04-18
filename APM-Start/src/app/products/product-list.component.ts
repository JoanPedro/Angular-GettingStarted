import { Component, OnInit } from '@angular/core';
import { default as productData } from '../../api/products/products.json';
import { Product } from '../shared/product.model';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  showImage: boolean = false;

  pageTitle: string = "Product List";
  products: Array<Product> = productData;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.products)
  }

  toggleImage: () => void = () => {
    this.showImage = !this.showImage;
  }
}
