import { CanActivateFn } from "@angular/router";

export const adminGuard: CanActivateFn = (route, state) => {
    let adminCheck = sessionStorage.getItem('auth_token')
  
    return !!adminCheck
   
  };
  