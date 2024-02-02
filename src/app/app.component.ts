import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nakapoke';
  currentRoute: string = '';

  constructor(private router: Router) {  }

  ngOnInit() {
    this.currentRoute = this.router.url
  }
}
