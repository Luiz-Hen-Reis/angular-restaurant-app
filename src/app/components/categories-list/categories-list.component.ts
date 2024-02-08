import { Component, Input } from '@angular/core';
import { Category } from 'src/types/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  @Input() categories: Category[] = [];
  @Input() apiUrl: string = 'http://localhost:4000'
}
