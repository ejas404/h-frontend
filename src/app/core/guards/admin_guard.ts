import { CanActivateFn } from "@angular/router";

export const adminGuard: CanActivateFn = (route, state) => {
    let adminCheck = sessionStorage.getItem('admin-token')
  
    return !!adminCheck
   
  };
  