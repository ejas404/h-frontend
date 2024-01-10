import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TutorProfileService } from "../services/tutor/profile";
import { MessageService } from "primeng/api";
import { StudentProfileService } from "../services/student/profile";


export const tutorGuard: CanActivateFn = (route, state) => {

    const router = inject(Router)

    let check = sessionStorage.getItem('auth_token') 
    if(!check){
      router.navigateByUrl('/tutor/login')
      failed('Session time out login again')
      return false
    } 
    
    return true
  };

  
  
  export const tutorBlockGuard: CanActivateFn = async (route, state) => {
    const service = inject(TutorProfileService);
  
    try {
      await checkUser(service);
      return true;  
    } catch (error) {
      return false;
    }
  };
  
  async function checkUser(service: TutorProfileService): Promise<void> {
    return new Promise((resolve, reject) => {
      const studentSub = service.getData().subscribe({
        next: (data) => {
          studentSub.unsubscribe();
          resolve(); 
        },
        error: (err) => {
          studentSub.unsubscribe();
          service.logout();
          failed('Entry restricted connect authority');
          reject(err); 
        }
      });
    });
  }
  
  function failed(msg : string) {
    const messageService = inject(MessageService)
  
    messageService.add({
      severity: 'error',
      summary: 'Blocked',
      detail:msg 
    })
  
    
  }