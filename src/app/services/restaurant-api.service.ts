import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from 'src/types/product';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<ProductList>(`${this.apiUrl}/api/v1/products`)
  }
}
