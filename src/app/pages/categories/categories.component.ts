import { Component } from '@angular/core';
import { RestaurantApiService } from 'src/app/services/restaurant-api.service';
import { Category } from 'src/types/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: Category[] = []

  constructor(private restaurantApiService: RestaurantApiService) {  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    return this.restaurantApiService.getCategories().subscribe(categories => this.categories = categories.categories);
  }
}
