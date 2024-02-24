import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user?: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isTokenValid().subscribe(user => {
      if (user) {
        this.user = user;
      }
    })
  }

  goToAuthPage() {
    this.router.navigate(['/auth']);
  }

  logout() {
    this.authService.logout()
  }
}
