
import { createReducer , on } from "@ngrx/store"
import { loginFailure, loginSuccess } from "./action"
import { createSelector , createFeatureSelector } from "@ngrx/store"
import { state } from "@angular/animations"
import { UserModel } from "../../models/auth"

export interface State {
    token : string | null,
    user : UserModel | null,
    loginError?: string
}


export const initialState : State = {
    token : null,
    user : null
}

const _authReducer = createReducer(
    initialState,
    on(loginSuccess , (state , {successResponse} )=>{
        sessionStorage.setItem('auth_token', successResponse.token)
        
        return {
            ...state,
            token : successResponse.token,
            user : successResponse.user

        }
    }),
    on(loginFailure , (state , {error})=>{
        console.log('login failure')
        return {
            ...state,
            loginError : error,
            token : null,
            user : null
            
        }
    }
    ))

export function authReducer(state : any , action : any){
    return _authReducer(state , action)
}

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const getState = createSelector(
    selectAuthState,
    (state)=> state
)