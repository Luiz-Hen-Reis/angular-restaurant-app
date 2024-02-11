import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  isRegister: boolean = true;

  login() {
  }
  
  register() {
  }

  toggleRegister() {
    this.isRegister = !this.isRegister;
  }

}
