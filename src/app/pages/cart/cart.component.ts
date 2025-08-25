import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { type Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private cartContext = inject(CartService);
  cartItems = this.cartContext.cartItems;
  cartTotalQuantity = this.cartContext.totalItems;
  cartTotalPrice = this.cartContext.totalPrice;

  onRemove(productIndex: number) {
    this.cartContext.remove(productIndex);
  }
}
