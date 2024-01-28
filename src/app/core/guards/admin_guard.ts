import { CanActivateFn } from "@angular/router";
import { checkTokenExpiry } from "../utils/check_token";

export const adminGuard: CanActivateFn = (route, state) => {
    const token = sessionStorage.getItem('auth_token')
    return !!token
    // if(typeof(token) !== 'string') return false;
    // return checkTokenExpiry(token)
};

// export const isAdminGuard :CanActivateFn = (route, state) : boolean => {

// }
  