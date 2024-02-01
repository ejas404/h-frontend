import { CanActivateFn, Router } from "@angular/router";
import { StudentProfileService } from "../services/student/profile";
import { inject } from "@angular/core";
import { MessageService } from "primeng/api";
import { ToastService } from "../services/shared/toast_service";


export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const toastService = inject(ToastService)

  let check = sessionStorage.getItem('auth_token')
  if (!check) {
    router.navigateByUrl('/login')
    toastService.fail('Session time out login again')
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
  const toastService = inject(ToastService)
  return new Promise((resolve, reject) => {
    const studentSub = service.getData().subscribe({
      next: (data) => {
        studentSub.unsubscribe();
        resolve();  // User is valid
      },
      error: (err) => {
        studentSub.unsubscribe();
        service.logout();
        toastService.fail('Entry restricted connect authority');
        reject(err);  // User is not valid
      }
    });
  });
}


