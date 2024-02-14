import { Inject } from "@angular/core"
import { JwtHelperService } from "@auth0/angular-jwt"
import { JWTDecodeModel, UserModel } from "../models/auth"
import { jwtDecode } from "jwt-decode"

export const checkTokenExpiry = (token : string) : boolean => {
    const jwtHelper = Inject(JwtHelperService)
    let check = jwtHelper.isTokenExpired(token)
    return check
}

export const decodeUserToken = ()  : JWTDecodeModel | false =>{
    const authToken = sessionStorage.getItem('auth_token')
    if(typeof(authToken) !== 'string') return false; 
    const decodedUser : JWTDecodeModel = (jwtDecode(authToken))
    return decodedUser;
}

export const isStudentToken = () : boolean => {
    const user : JWTDecodeModel | false = decodeUserToken()
    if(!user) return false;
    return user.role === 'Student'
}


export const isAdminToken = () : boolean => {
    const user : JWTDecodeModel | false = decodeUserToken()
    if(!user) return false;
    return user.role === 'Admin'
}