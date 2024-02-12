import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = 'http://localhost:4000';
  user?: User;
  token?: string;

  constructor(private http: HttpClient) { }


  registerNewUser(name: string, email: string, password: string, passwordConfirmation: string) {
      const payload = {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      }
  
      return this.http.post(`${this.apiUrl}/auth/register`, payload);

  }

  login(email: string, password: string) {
      const payload = {
        email,
        password
      }
  
      return this.http.post<User>(`${this.apiUrl}/auth/login`, payload).subscribe(response => {
        this.user === response
      });

  }
}
