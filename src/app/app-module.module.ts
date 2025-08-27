import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';

import { ProductsModule } from './features/products/products-module.module';
import { App } from './app';
import { Home } from './pages/home/home.component';
import { NotFound } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';

import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [App, Home, NotFound, CartComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ProductsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
