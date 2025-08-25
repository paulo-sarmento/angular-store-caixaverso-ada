import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { ProductsModule } from './features/products/products-module.module';
import { App } from './app';
import { Home } from './pages/home/home.component';
import { NotFound } from './pages/not-found/not-found.component';
import { Admin } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';

import { CartService } from './services/cart-service.service';

@NgModule({
  declarations: [App, Home, NotFound, Admin, CartComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [provideBrowserGlobalErrorListeners(), CartService],
  bootstrap: [App],
})
export class AppModule {}
