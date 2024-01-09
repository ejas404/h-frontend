import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TutorProfileService } from "../services/tutor/profile";
import { MessageService } from "primeng/api";


export const tutorGuard: CanActivateFn = (route, state) => {

    const router = inject(Router)

    let check = sessionStorage.getItem('auth_token') 
    if(!check){
      router.navigateByUrl('/tutor/login')
      return false
    } 
    
    return true
  };

  export const tutorBlockGuard: CanActivateFn = (route, state) => {
    const service = inject(TutorProfileService)
    const messageService = inject(MessageService)
  
    if (service.isBlocked() === false) {
  
      messageService.add({
        severity : 'error',
        summary : 'Blocked',
        detail : 'Entry restricted connect authority'
      })
      service.logout()
      return false
    }
    return true
  }
  
  
  