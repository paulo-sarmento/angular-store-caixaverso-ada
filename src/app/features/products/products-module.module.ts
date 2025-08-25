import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product-service.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCategory } from './components/product-category/product-category';
import { ProductDetailComponent } from '../../pages/product-detail/product-detail.component';
import { AppRoutingModule } from '../../app-routing-module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductCategory,
    ProductDetailComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [ProductListComponent],
  providers: [ProductService],
})
export class ProductsModule {}
