import { CanActivateFn, Router } from "@angular/router";
import { StudentProfileService } from "../services/student/profile";
import { inject } from "@angular/core";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";





export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)


  let check = sessionStorage.getItem('auth_token')
  if (!check) {
    router.navigateByUrl('/login')
    failed('Session time out login again')
    return false
  }

  return true
};

export const studentBlockGuard: CanActivateFn = async (route, state) => {
  const service = inject(StudentProfileService);

  try {
    await checkUser(service);
    return true;  // User is authenticated
  } catch (error) {
    // Handle unauthorized access or other errors
    return false;
  }
};

async function checkUser(service: StudentProfileService): Promise<void> {
  return new Promise((resolve, reject) => {
    const studentSub = service.getData().subscribe({
      next: (data) => {
        studentSub.unsubscribe();
        resolve();  // User is valid
      },
      error: (err) => {
        studentSub.unsubscribe();
        service.logout();
        failed('Entry restricted connect authority');
        reject(err);  // User is not valid
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


