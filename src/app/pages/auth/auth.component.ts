import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserAuthentication } from 'src/types/user-authentication';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  userRegistered: boolean = true;
  userForm!: FormGroup;

  constructor(private authServices: AuthService, private formBuilder: FormBuilder, private router: Router) { 
    this.userForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    })
   }

   ngOnInit() {
    this.authServices.isTokenValid().subscribe(user => {
      if (user) {
        this.router.navigate(['/'])
      }
    });
  }

  login() {
      const formData: UserAuthentication = this.userForm.value;
      this.authServices.login(formData.email, formData.password);
  }
  
  register() {
      // const formData: UserAuthentication = this.userForm.value
      // this.authServices.registerNewUser(formData.name, formData.email,
      //    formData.password, formData.passwordConfirmation).subscribe(response => {
      //     console.log(response);
      //    }
      //    )
  }

  toggleRegister() {
    this.userRegistered = !this.userRegistered;
  }

}
