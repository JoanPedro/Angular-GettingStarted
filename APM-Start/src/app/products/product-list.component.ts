import { Component, OnInit } from '@angular/core';
import { default as productData } from '../../api/products/products.json';
import { Product } from '../shared/models/product.model';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  private _listFilter: string = '';

  showImage: boolean = false;
  pageTitle: string = "Product List";
  products: Array<Product> = productData;
  filteredProducts: Array<Product> = this.performFilter('');

  get listFilter(): string { return this._listFilter; }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  constructor() { }

  ngOnInit(): void { }

  toggleImage: () => void = () => {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Array<Product> {
    const filterByOnLocaleLowerCase: string = filterBy.toLocaleLowerCase();
    return this.products
      .filter(
        product => product.productName.toLocaleLowerCase().includes(
          filterByOnLocaleLowerCase
        )
      );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
