import { Injectable } from "@angular/core";
import { ofType, createEffect, Actions } from "@ngrx/effects";
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import { Router } from "@angular/router";
import * as AuthActions from "./action";
import { AuthService } from "../../services/auth_service";
import { MessageService } from "primeng/api";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private router: Router,
    private messageService : MessageService
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
            catchError((err) =>{
              let error = err.error.message
              this.messageService.add({
                severity : 'error',
                summary : 'Login Failed',
                detail : error
              })
              return of(AuthActions.loginFailure({error}))})
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
              this.messageService.add({
                severity : 'error',
                summary : 'Login Failed',
                detail : error
              })
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
            return AuthActions.loginSuccess({ successResponse })
          }

          ),
          catchError((err) =>{
            console.log(err)
            console.log('error printed')
            let error = err.error.message
            this.messageService.add({
              severity : 'error',
              summary : 'Login Failed',
              detail : error || 'login failed'
            })
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
          if (successResponse.user.role === 'Admin') {
            this.router.navigateByUrl('/admin')
          } else if (successResponse.user.role === 'Student') {
            this.router.navigateByUrl('/profile')
          } else if (successResponse.user.role === 'Tutor') {
            this.router.navigateByUrl('/tutor')
          }

        })
      ),
    { dispatch: false }
  );


  // effect for after the login

  loginFailure$ = this.actions$.pipe(
    ofType(AuthActions.loginFailure),
    tap(({ error }) => {
      console.log('this is some login failure error')
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
              console.log(error)
              this.messageService.add({
                severity : 'error',
                summary : 'Registration Failed',
                detail : error.error.message || 'some error occured try later'
              })
              return of(AuthActions.submitFail({ error }))})
          )

      )
    )
  )

  registerTutor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tutorSignup),
      exhaustMap((action) =>
        this.service.tutorRegister(action.tutorData)
          .pipe(
            map((successResponse) => {
              return AuthActions.submitSuccess({ successResponse })
            }),
            catchError((error) =>{ 
              this.messageService.add({
                severity : 'error',
                summary : 'Registration Failed',
                detail : error.error.message || 'some error occured try later'
              })
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
          this.messageService.add({
            severity : 'success',
            summary : 'Registration Completed',
            detail : 'registered successfully'
          })
          if(successResponse.role === 'Student'){
            this.router.navigateByUrl('/login')
          }else if(successResponse.role === 'Tutor'){
            this.router.navigateByUrl('/tutor/login')
          }
          
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