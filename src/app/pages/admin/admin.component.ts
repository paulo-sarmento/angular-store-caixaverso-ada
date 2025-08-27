import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../features/products/services/product-service.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  private productService = inject(ProductService);

  products$ = this.productService.getProducts();
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.products$.subscribe({
      next: (product) => this.products.set(product),
    });
  }

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {});
    this.products.update((products) => products.filter((product) => product.id !== id));
  }
}
