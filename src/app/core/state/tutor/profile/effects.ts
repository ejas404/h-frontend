import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StudentProfileService } from "../../../services/student/profile";
import * as TutorProfActions from "./action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { TutorProfileService } from "../../../services/tutor/profile";


@Injectable()
export class TutorProfileEffect{
    constructor(
        private actions$ : Actions,
        private service : TutorProfileService
    ){}

    getStudentData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorProfActions.getTutorData),
      exhaustMap((action) =>
        this.service.getData()
          .pipe(
            map((tutorData) => {
              return TutorProfActions.getTutorSuccess({tutorData})
            }),
            catchError((res : any) =>{ 
              console.log(res.error.message, 'error printing')
              alert('some error occured try later')
              return of(TutorProfActions.getTutorFail({error : res.error.message}))})
          )

      )
    )
  )

  getStudentSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TutorProfActions.getTutorSuccess),
        tap(({ tutorData }) => {
        })
      ),
    { dispatch: false }
  );


}