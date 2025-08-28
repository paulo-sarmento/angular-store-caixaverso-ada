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

  isLoggedIn = signal<boolean>(this.hasToken());

  userName = computed(() => {
    const token = this.token;

    if (token) {
      try {
        const decodedToken = jwtDecode<payload>(token);
        return decodedToken.user;
      } catch (error) {
        console.log('erro ao decodificar o token', this.token);
      }
    }

    return;
  });

  login(credentials: { username: string; password: string }): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(this.apiUrl, credentials);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
  }

  set token(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn.set(true);
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
