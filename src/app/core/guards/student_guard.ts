import { CanActivateFn, Router } from "@angular/router";
import { StudentProfileService } from "../services/student/profile";
import { inject } from "@angular/core";
import { MessageService } from "primeng/api";





export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
 

  let check = sessionStorage.getItem('student-token')
  if (!check) {
    router.navigateByUrl('**')
    return false
  }

  return true
};

export const studentBlockGuard: CanActivateFn = (route, state) => {
  const service = inject(StudentProfileService)
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


