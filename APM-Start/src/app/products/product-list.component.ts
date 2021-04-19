import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
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
  products: Array<Product> = new Array();
  filteredProducts: Array<Product> = new Array();

  get listFilter(): string { return this._listFilter; }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.performFilter('');
  }

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
