import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as TutorProfActions from "./action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { TutorProfileService } from "../../../services/tutor/profile";
import { MessageService } from "primeng/api";
import { ToastService } from "app/core/services/shared/toast_service";


@Injectable()
export class TutorProfileEffect{
    constructor(
        private actions$ : Actions,
        private service : TutorProfileService,
        private toastService : ToastService
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
              this.toastService.fail('data fetch error')
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
              this.toastService.success('Details Updated Successfully')
              return TutorProfActions.updateEducationSuccess({successResponse})
            }),
            catchError((res : any)=>{
              let msg = res.error.message 
              this.toastService.fail(msg)
              return of(TutorProfActions.updateEducationFail({ error: res.error.message }));
            })
          )
      )
    ) 
  );

}