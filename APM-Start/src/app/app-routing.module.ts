import { ProductDetailGuard } from './products/shared/product.guard';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/detail/product-detail.component';
import { ProductListComponent } from './products/list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const productRouterChildren: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
];

const routes: Routes = [
  { path: 'products', children: productRouterChildren },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

