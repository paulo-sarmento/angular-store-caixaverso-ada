import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface payload {
  user: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/auth/login';

  private _token = signal<string | null>(this.getToken());

  readonly isLoggedIn = computed(() => !!this._token());

  readonly userName = computed(() => {
    const token = this._token();
    if (token) {
      const decoded = jwtDecode<payload>(token);
      return decoded.user;
    }
    return '';
  });

  login(credentials: { username: string; password: string }): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(this.apiUrl, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  saveTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
