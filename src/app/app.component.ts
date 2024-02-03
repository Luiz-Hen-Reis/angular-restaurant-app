import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nakapoke';
  currentRoute: string = '';

  constructor(private router: Router) { 
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
        this.currentRoute = this.router.url;
      })
   }
}
