import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { Home } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';

import { NotFound } from './pages/not-found/not-found.component';

import { authGuard } from './guards/auth.guard';
import { authInterceptor } from './interceptors/auth-interceptor';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin-module.module').then((m) => m.AdminModule),
    canActivate: [adminGuard],
  },

  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
})
export class AppRoutingModule {}
