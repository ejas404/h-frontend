
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { blockSuccess, dashboardFailure, dashboardSuccess, deleteSuccess, unblockSuccess, updateSuccess } from "./action";
import { UserModel } from "../../../models/auth";
import { state } from "@angular/animations";

interface DashboardState {
    list : UserModel[],
    errormessage : string,
    userObj : UserModel
}

const initialState : DashboardState = {
    list : [],
    errormessage : "",
    userObj : {
        name : '',
        email : "",
        role : "",
        _id : ""
    }
}


const _dashboardReducer = createReducer(
    initialState,
    on(dashboardSuccess, (state ,action )=>{
        return{
            ...state,
            list : [...action.list],
            errormessage : ""
        }
    }),

    on(dashboardFailure , (state , action)=>{
        return{
            ...state,
            list : [],
            errormessage : action.error
        }
    }),

    on(deleteSuccess, (state, {user})=>{
        const newList = state.list.filter(data => data._id !== user._id)
        return{
            ...state,
            list : newList,
            errormessage : ""
        }
    }),

    on(blockSuccess, (state, {user})=>{
        const newList = state.list.map(data => {
            if(data._id === user._id){
                return {...data, isBlocked:true}
            }
            return data
        })
        return{
            ...state,
            list : newList,
            errormessage : ""
        }
    }),

    on(unblockSuccess, (state, {user})=>{
        const newList = state.list.map(data => {
            if(data._id === user._id){
                return {...data, isBlocked:false }
            }
            return data
        })
        return{
            ...state,
            list : newList,
            errormessage : ""
        }
    }),

    on(updateSuccess, (state,{user})=>{
        const updatedList = state.list.map(data=>{
            if(data._id === user._id){
                return{...user,...data}
            }else{
                return data
            }
        })

        return{
            ...state,
            list : updatedList,
            errormessage : ""
        }
    })
)

export function dashboardReducer(state : any , action : any){
    return _dashboardReducer(state , action)
}

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const getUsersList = createSelector(
  selectDashboardState,
  (state) => state.list
);

// export const getState = createSelector(
//     selectAuthState,
//     (state)=> state
// )








