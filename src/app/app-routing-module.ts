import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { ProductService } from './features/products/services/product-service.service';

import { Home } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { Admin } from './pages/admin/admin.component';

import { NotFound } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },

  { path: 'admin', component: Admin },

  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient(), ProductService],
})
export class AppRoutingModule {}
