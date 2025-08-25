import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map } from 'rxjs';

import { ProductService } from '../../features/products/services/product-service.service';
import { CartService } from '../../services/cart-service.service';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cartContext = inject(CartService);
  private route = inject(ActivatedRoute);

  public product = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')!),
      switchMap((id) => this.productService.getProductsById(id))
    ),
    { initialValue: {} as Product }
  );

  onAddToCart() {
    this.cartContext.add(this.product());
  }
}
