import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StudentProfileService } from "../../../services/student/profile";
import * as StudProfActions from "./action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";


@Injectable()
export class StudentProfileEffect{
    constructor(
        private actions$ : Actions,
        private service : StudentProfileService
    ){}

    getStudentData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudProfActions.getUserData),
      exhaustMap((action) =>
        this.service.getData()
          .pipe(
            map((userData) => {
              return StudProfActions.getUserSuccess({userData})
            }),
            catchError((res : any) =>{ 
              console.log(res.error.message, 'error printing')
              alert('some error occured try later')
              return of(StudProfActions.getUserFail({error : res.error.message}))})
          )

      )
    )
  )

  getStudentSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(StudProfActions.getUserSuccess),
        tap(({ userData }) => {
        })
      ),
    { dispatch: false }
  );

    // getStudentData$ = createEffect(()=>
    //     this.actions$.pipe(
    //         ofType(StudProfActions.getUserData),
    //         exhaustMap((action)=>
    //             this.service.getData()
    //             .pipe(
    //                 map((userData)=>{
    //                     return StudProfActions.getUserSuccess({userData})
    //                 }),
    //                 catchError((err)=>{
    //                     console.log(err)
    //                     alert(err.error.message)
    //                     return of(StudProfActions.getUserFail({err.error.message}))
    //                 })
    //             )
    //         )
    //     )
    // )
}