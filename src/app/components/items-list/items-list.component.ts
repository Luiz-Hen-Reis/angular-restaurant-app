import { Component, Input } from '@angular/core';
import { Product } from 'src/types/product';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input() products: Product[] = [];
  @Input() apiUrl: string = 'http://localhost:4000'
}
