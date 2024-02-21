import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User, UserResponse } from 'src/types/user';
import { jwtDecode } from 'jwt-decode';
import { Observable, catchError, map, of } from 'rxjs';

interface Jwt {
  user_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = 'http://localhost:4000';
  user?: User;
  private token?: string;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }


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
  
      return this.http.post<UserResponse>(`${this.apiUrl}/auth/login`, payload).subscribe(response => {   
        this.user = response
        this.token = response.token
        this.cookieService.set('user-token', this.token);
        this.router.navigate(['/'])         
      });
  }

  isTokenValid(): Observable<User | null> {
    try {
      const token = this.cookieService.get('user-token');
      const decodedToken: Jwt = jwtDecode(token);

      return this.http.get<User>(`${this.apiUrl}/auth/users/${decodedToken.user_id}`)
        .pipe(
          map(response => {
            this.user = response;
            return this.user;
          }),
          catchError(error => {
            console.log(error);
            return of(null);
          })
        );
    } catch (error) {
      console.log(error);
      return of(null); 
    }
  }
}
