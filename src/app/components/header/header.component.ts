import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user?: User;

  constructor(private authService: AuthService) { }
}
