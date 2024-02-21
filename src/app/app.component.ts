import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from 'src/types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nakapoke';
  currentRoute: string = '';
  user?: User;

  constructor(private router: Router, private authService: AuthService) { 
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
        this.currentRoute = this.router.url;
      })
   }

   ngOnInit() {
    this.authService.isTokenValid().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }
}
