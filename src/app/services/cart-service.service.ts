import { computed, Injectable, signal } from '@angular/core';
import { type Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsInCart = signal<Product[]>([]);

  public readonly cartItems = this.productsInCart.asReadonly();

  public readonly totalPrice = computed(() => {
    return this.productsInCart().reduce((totalPrice, cartItem) => totalPrice + cartItem.price, 0);
  });

  public readonly totalItems = computed(() => this.productsInCart().length);

  add(product: Product): void {
    this.productsInCart.update((prevProductsInCart) => [...prevProductsInCart, product]);
  }

  remove(productIndex: number): void {
    this.productsInCart.update((prevProductsInCart) =>
      prevProductsInCart.filter((cartItem, index) => index !== productIndex)
    );
  }
}
