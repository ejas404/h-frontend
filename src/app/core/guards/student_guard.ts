import { CanActivateFn } from "@angular/router";


export const studentGuard: CanActivateFn = (route, state) => {
    let check = sessionStorage.getItem('student-token') 
    return !!check  
  };
  