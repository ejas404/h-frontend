import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap , catchError, map , of } from "rxjs";
import { DashboardService } from "../../../services/admin/dashboard";
import * as DashboardActions from "./action";
import { ToastService } from "app/core/services/shared/toast_service";
import { checkActionUser } from "app/core/utils/check_user";


@Injectable()
export class DashboardEffects{
    constructor(
        private action$ : Actions,
        private service : DashboardService,
        private toastService : ToastService
    ){}

    dashboardRequest$ = createEffect(()=>
        this.action$.pipe(
            ofType(DashboardActions.dashboardRequest),
            exhaustMap(()=>{
               return this.service.getUsers()
                .pipe(
                    map((list) =>{
                        return  DashboardActions.dashboardSuccess({ list })
                      }
                          
                      ),
                        catchError((error) => of(DashboardActions.dashboardFailure({error})))
                )
            })
        )
    )

    deleteUser$ = createEffect(()=>
        this.action$.pipe(
            ofType(DashboardActions.deleteUser),
            exhaustMap((action)=>{
               return this.service.deleteUser(action.id, action.user)
                .pipe(
                    map((user) =>{
                        this.toastService.success(`Deleted ${user.role || 'user'} successfully`)
                        const listName = checkActionUser(action.user)
                        return  DashboardActions.deleteSuccess({ user,listName })
                      }
                          
                      ),
                      catchError((error) => of(DashboardActions.deletefailure({error})))
                )
            })
        )
    )

  

    
    blockUser$ = createEffect(()=>
    this.action$.pipe(
        ofType(DashboardActions.blockRequest),
        exhaustMap((action)=>{
           return this.service.blockUser(action.user_id,action.user)
            .pipe(
                map((user) =>{
                    this.toastService.success(`Blocked ${user.role || 'user'} successfully`)
                    const listName = checkActionUser(action.user)
                    return  DashboardActions.blockSuccess({ user, listName })
                  }
                      
                  ),
                  catchError((error) => {
                    this.toastService.fail('failed to block')
                    return of(DashboardActions.blockFailure({error}))}
                  )
            )
        })
    )
)


unblockUser$ = createEffect(()=>
this.action$.pipe(
    ofType(DashboardActions.unblockRequest),
    exhaustMap((action)=>{
       return this.service.unblockUser(action.user_id,action.user)
        .pipe(
            map((user) =>{
                this.toastService.success(`Unblocked ${user.role || 'user'} successfully`)
                const listName = checkActionUser(action.user)
                return  DashboardActions.unblockSuccess({ user ,listName })
              }
                  
              ),
              catchError((error) => {
                return of(DashboardActions.unblockFailure({error}))}
              )
        )
    })
)
)


}