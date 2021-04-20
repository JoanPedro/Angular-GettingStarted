import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { ConvertToSpacesPipe } from '../shared/pipes/convert-to-spaces.pipe';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductListComponent } from './list/product-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
