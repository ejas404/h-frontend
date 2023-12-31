import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as TutorProfActions from "./action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { TutorProfileService } from "../../../services/tutor/profile";
import { MessageService } from "primeng/api";


@Injectable()
export class TutorProfileEffect{
    constructor(
        private actions$ : Actions,
        private service : TutorProfileService,
        private messageService : MessageService
    ){}

    getTutorData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorProfActions.getTutorData),
      exhaustMap((action) =>
        this.service.getData()
          .pipe(
            map((tutorData) => {
              return TutorProfActions.getTutorSuccess({tutorData})
            }),
            catchError((res : any ) =>{ 
              let msg = res.error.message 
              this.messageService.add({
                severity : 'error',
                summary : 'Data fetch Error',
                detail : msg
              })
              return of(TutorProfActions.getTutorFail({error : msg}))})
          )

      )
    )
  )

  getTutorSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TutorProfActions.getTutorSuccess),
        tap(({ tutorData }) => {
        })
      ),
    { dispatch: false }
  );

  
  updateTutorEducation$ = createEffect(
    ()=> this.actions$.pipe(
      ofType(TutorProfActions.updateEducationDetails),
      exhaustMap((action)=>
        this.service.updateEducation(action.educationDetails)
          .pipe(
            map((successResponse)=>{
              this.messageService.add({
                severity : 'success',
                summary : 'Success',
                detail : 'Details Updated Successfully'
              })
              return TutorProfActions.updateEducationSuccess({successResponse})
            }),
            catchError((res : any)=>{
              let msg = res.error.message 
              this.messageService.add({
                severity : 'error',
                summary : 'Updation Error',
                detail : msg
              })
              return of(TutorProfActions.updateEducationFail({ error: res.error.message }));
            })
          )
      )
    ) 
  );

}