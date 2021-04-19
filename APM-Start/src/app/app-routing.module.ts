import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/detail/product-detail.component';
import { ProductListComponent } from './products/list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '/products', component: ProductListComponent },
  { path: '/products/:id', component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { pathMatch: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
