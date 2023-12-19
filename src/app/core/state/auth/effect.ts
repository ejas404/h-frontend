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
    private service: AuthService,
    private router: Router
  ) { }

  adminLoginReq$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.adminLoginReq),
      exhaustMap((action) =>
        this.service
          .adminLogin(action.credentials)
          .pipe(
            map((successResponse) => {
              return AuthActions.loginSuccess({ successResponse })
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
          .studentLogin(action.credentials)
          .pipe(
            map((successResponse) => {
              console.log('got a success response')
              console.log(successResponse)
              return AuthActions.loginSuccess({ successResponse })
            }

            ),
            catchError((err) =>{
              let error = err.error.message
              alert(err.error.message)
              return of(AuthActions.loginFailure({error}))})
          )
      )
    )
  );

  tutorLoginReq$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.tutorLoginReq),
    exhaustMap((action) =>
      this.service
        .tutorLogin(action.credentials)
        .pipe(
          map((successResponse) => {
            console.log('got a success response')
            console.log(successResponse)
            return AuthActions.loginSuccess({ successResponse })
          }

          ),
          catchError((err) =>{
            let error = err.error.message
            alert(err.error.message)
            return of(AuthActions.loginFailure({error}))})
        )
    )
  )
);

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ successResponse }) => {
          console.log(successResponse.user.role, 'role printing')
          if (successResponse.user.role === 'Admin') {
            this.router.navigateByUrl('/admin')
          } else if (successResponse.user.role === 'Student') {
            this.router.navigateByUrl('/profile')
          } else if (successResponse.user.role === 'Tutor') {
            this.router.navigateByUrl('/tutor/profile')
          }

        })
      ),
    { dispatch: false }
  );


  // effect for after the login

  loginFailure$ = this.actions$.pipe(
    ofType(AuthActions.loginFailure),
    tap(({ error }) => {
      console.log('this is some')
      console.log(error)
    })
  );

  registerRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.studentSignup),
      exhaustMap((action) =>
        this.service.studentRegister(action.studentData)
          .pipe(
            map((successResponse) => {
              return AuthActions.submitSuccess({ successResponse })
            }),
            catchError((error) =>{ 
              console.log(error, 'error printing')
              alert('some error occured try later')
              return of(AuthActions.submitFail({ error }))})
          )

      )
    )
  )


  registerSucess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.submitSuccess),
        tap(({ successResponse }) => {
          alert('registered successfully')
          this.router.navigateByUrl('/login')
        })
      ),
    { dispatch: false }
  );

  registrationFailure$ = this.actions$.pipe(
    ofType(AuthActions.submitFail),
    tap((action) => {
      console.log('submission failed')
      console.log(action)
    })
  );


  // effect for after the login success


}