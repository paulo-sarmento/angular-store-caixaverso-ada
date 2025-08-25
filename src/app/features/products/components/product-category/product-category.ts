import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-category',
  standalone: false,
  templateUrl: './product-category.html',
  styleUrl: './product-category.css',
})
export class ProductCategory {
  categories$ = inject(ProductService);
  categories = toSignal(this.categories$.getCategories());

  @Output() selectedCategory = new EventEmitter<string>();

  onSelectCategory(category: string): void {
    this.selectedCategory.emit(category);
  }
}
