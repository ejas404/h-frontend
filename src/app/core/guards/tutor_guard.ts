import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";


export const tutorGuard: CanActivateFn = (route, state) => {

    const router = inject(Router)

    let check = sessionStorage.getItem('tutor-token') 
    if(!check){
      router.navigateByUrl('/tutor/login')
      return false
    } 
    
    return true
  };
  