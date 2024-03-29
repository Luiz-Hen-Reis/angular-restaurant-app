import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryList, CategoryProduct } from 'src/types/category';
import { ProductList } from 'src/types/product';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getProducts(page?: number, limit?: number) {
    return this.http.get<ProductList>(`${this.apiUrl}/api/v1/products?page=${page}&limit=${limit}`);
  }

  getCategories() {
    return this.http.get<CategoryList>(`${this.apiUrl}/api/v1/categories`);
  }

  getCategoryProducts(categoryId: string) {
    return this.http.get<CategoryProduct>(`${this.apiUrl}/api/v1/categories/${categoryId}`)
  }
}
