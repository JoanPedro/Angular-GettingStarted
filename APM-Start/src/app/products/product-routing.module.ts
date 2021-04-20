import { ProductDetailGuard } from './shared/product.guard';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductListComponent } from './list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const productRouterChildren: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
];

const routes: Routes = [
  { path: 'products', children: productRouterChildren },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
