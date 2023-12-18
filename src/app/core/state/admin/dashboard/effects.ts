import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap , catchError, map , of } from "rxjs";
import { DashboardService } from "../../../services/admin/dashboard";
import * as DashboardActions from "./action";


@Injectable()
export class DashboardEffects{
    constructor(
        private action$ : Actions,
        private service : DashboardService
    ){}

    dashboardRequest$ = createEffect(()=>
        this.action$.pipe(
            ofType(DashboardActions.dashboardRequest),
            exhaustMap(()=>{
               return this.service.getUsers()
                .pipe(
                    map((list) =>{
                        console.log('success req')
                        return  DashboardActions.dashboardSuccess({ list })
                      }
                          
                      ),
                        catchError((error) => { 
                            console.log(error)
                            console.log('get user error occured')
                            return of(DashboardActions.dashboardFailure({error}))}
                      )
                )
            })
        )
    )

    deleteUser$ = createEffect(()=>
        this.action$.pipe(
            ofType(DashboardActions.deleteUser),
            exhaustMap((action)=>{
               return this.service.deleteUser(action.id)
                .pipe(
                    map((user) =>{
                        return  DashboardActions.deleteSuccess({ user })
                      }
                          
                      ),
                      catchError((error) => of(DashboardActions.deletefailure({error}))
                      )
                )
            })
        )
    )

    updateUser$ = createEffect(()=>
        this.action$.pipe(
            ofType(DashboardActions.updateRequest),
            exhaustMap((action)=>{
               return this.service.updateUser(action.userData)
                .pipe(
                    map((user) =>{
                        return  DashboardActions.updateSuccess({ user })
                      }
                          
                      ),
                      catchError((error) => of(DashboardActions.updateFailure({error}))
                      )
                )
            })
        )
    )

    
    blockUser$ = createEffect(()=>
    this.action$.pipe(
        ofType(DashboardActions.blockRequest),
        exhaustMap((action)=>{
           return this.service.blockUser(action.user_id)
            .pipe(
                map((user) =>{
                    return  DashboardActions.blockSuccess({ user })
                  }
                      
                  ),
                  catchError((error) => {
                    alert('some error occured')
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
       return this.service.unblockUser(action.user_id)
        .pipe(
            map((user) =>{
                return  DashboardActions.unblockSuccess({ user })
              }
                  
              ),
              catchError((error) => {
                alert('some error occured')
                return of(DashboardActions.unblockFailure({error}))}
              )
        )
    })
)
)


}