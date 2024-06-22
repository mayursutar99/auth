import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const controlsGuard: CanActivateFn = (route, state) => {
  let _router =inject(Router);
  let isValid=localStorage.getItem('isValid');
  if(!isValid){
    _router.navigate(['/login'])
    return false;
  }
  return true;
};
