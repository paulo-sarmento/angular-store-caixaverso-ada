import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth.service';
import { inject } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export const adminGuard: CanActivateFn = (route, state) => {
  const authContext = inject(Auth);
  const router = inject(Router);

  interface payload extends JwtPayload {
    user: string;
  }

  if (authContext.isLoggedIn()) {
    const token = authContext.token;

    if (token) {
      try {
        const decodedToken = jwtDecode<payload>(token);
        if (decodedToken.user === 'johnd') {
          return true;
        }
      } catch (error) {
        console.log('Erro ao decodificar o token: ', error);
      }
    }
  }
  router.navigate(['/login']);
  return false;
};
