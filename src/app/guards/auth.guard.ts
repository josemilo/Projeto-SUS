import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    console.log('Acesso negado. Redirecionando para /login');
    router.navigate(['/login']);
    return false;
  }
};
