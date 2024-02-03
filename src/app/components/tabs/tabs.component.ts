import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  constructor(private router: Router) { }

  onTabChanged(event: any) {
    if (event.index === 1) {
      this.goToCategories();
    }
    else if (event.index === 2) {
      this.goToCheckout();
    } else {
      this.router.navigate(['/'])
    }
  }

  goToCategories() {
    this.router.navigate(['/categories']);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
