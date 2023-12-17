import { Injectable } from "@angular/core";
import { ofType, createEffect, Actions } from "@ngrx/effects";
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import { Router } from "@angular/router";
import * as AuthActions from "./action";
import { AuthService } from "../../services/auth_service";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private service : AuthService,
        private router : Router
    ) { }

    adminLoginReq$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.adminLoginReq),
            exhaustMap((action) =>
                this.service
                    .adminLogin(action.credentials)
                    .pipe(
                        map((successResponse) =>{
                          return  AuthActions.loginSuccess({ successResponse })
                        }
                            
                        ),
                        catchError((error) => of(AuthActions.loginFailure({ error })))
                    )
            )
        )
    )

    studentLoginReq$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AuthActions.studentLoginReq),
        exhaustMap((action) =>
            this.service
                .adminLogin(action.credentials)
                .pipe(
                    map((successResponse) =>{
                      return  AuthActions.loginSuccess({ successResponse })
                    }
                        
                    ),
                    catchError((error) => of(AuthActions.loginFailure({ error })))
                )
        )
    )
)





// effect for after the login success

    loginSuccess$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({ successResponse }) => {
            if(successResponse.user.role === 'Admin'){
                this.router.navigateByUrl('/admin/dashboard')
            }else if (successResponse.user.role === 'Student'){
                this.router.navigateByUrl('/profile')
            }else if (successResponse.user.role === 'Tutor'){
                this.router.navigateByUrl('/tutor/profile')
            }
            
            })
          ),
        { dispatch: false }
      );


      // effect for after the login

      loginFailure$ = this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap((action) => {
          console.log('this is some')
          console.log(action)
        })
      );
}