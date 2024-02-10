import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantApiService } from 'src/app/services/restaurant-api.service';
import { Product } from 'src/types/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryId: string = '';
  products: Product[] = [];
  apiUrl = 'http://localhost:4000';

  constructor(private route: ActivatedRoute, private restaurantApiService: RestaurantApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id')!;
    })

    this.getCategoryProducts(this.categoryId);
  }

  getCategoryProducts(id: string) {
    this.restaurantApiService.getCategoryProducts(this.categoryId).subscribe(category => {
      this.products = category.products
    })
  }
}
