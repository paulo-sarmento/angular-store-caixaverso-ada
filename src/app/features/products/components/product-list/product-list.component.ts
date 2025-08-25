import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products = toSignal(this.productService.getProducts());

  productsByCategory = computed(() => {
    const category = this.selectedCategory();
    const products = this.products();

    return category ? products!.filter((product) => product.category === category) : [];
  });

  visibleProducts = computed(() => {
    const filteredByCategory = this.productsByCategory();

    return filteredByCategory.length > 0 ? this.productsByCategory() : this.products();
  });

  selectedCategory = signal<string>('');

  onSelectedCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
