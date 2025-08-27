import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authContext = inject(Auth);
  const router = inject(Router);

  if (authContext.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
