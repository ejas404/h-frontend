import { Inject } from "@angular/core"
import { JwtHelperService } from "@auth0/angular-jwt"
import { JWTDecodeModel } from "../models/auth"
import { jwtDecode } from "jwt-decode"

export const checkTokenExpiry = (token : string) : boolean => {
    const jwtHelper = Inject(JwtHelperService)
    let check = jwtHelper.isTokenExpired(token)
    return check
}

export const isStudentToken = (token : string) : boolean => {
    if(typeof(token) !== 'string') return false;
    const decodedUser : JWTDecodeModel = (jwtDecode(token))
    return decodedUser.role === 'Student'
}