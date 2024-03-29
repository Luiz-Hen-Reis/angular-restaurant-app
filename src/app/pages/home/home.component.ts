import { Component } from '@angular/core';
import { RestaurantApiService } from 'src/app/services/restaurant-api.service';
import { Product } from 'src/types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  private page: number = 1;
  private limit: number = 6;
  apiUrl = 'http://localhost:4000'

  constructor(private restaurantApiService: RestaurantApiService) {  }

  ngOnInit() {
    this.getProducts(this.page, this.limit);
  }

  getProducts(page = this.page,limit = this.limit) {
  this.restaurantApiService.getProducts(page, limit).subscribe(products => {
    this.products = products.products 
  })
  }
}
