import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { StarComponent } from './../shared/star/star.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductListComponent } from './list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
