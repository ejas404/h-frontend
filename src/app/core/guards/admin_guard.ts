import { CanActivateFn } from "@angular/router";
import { checkTokenExpiry, isAdminToken } from "../utils/check_token";

export const adminGuard: CanActivateFn = (route, state) => {
    const token = isAdminToken()
    return token
    
};

// export const isAdminGuard :CanActivateFn = (route, state) : boolean => {

// }
  