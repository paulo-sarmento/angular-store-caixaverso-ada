import { HttpInterceptorFn } from '@angular/common/http';
import { Auth } from '../services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authContext = inject(Auth);
  const token = authContext.getToken();

  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next(clonedReq);
  }

  return next(req);
};
