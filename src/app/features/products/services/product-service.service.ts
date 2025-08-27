import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { type Product } from '../../../interfaces/products.interface';

@Injectable()
export class ProductService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.apiUrl}/categories`);
  }

  getProductsById(idProduto: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${idProduto}`);
  }

  deleteProduct(id: number): Observable<{}> {
    return this.httpClient.delete<{}>(`${this.apiUrl}/${id}`);
  }
}
