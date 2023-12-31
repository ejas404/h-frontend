
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { blockSuccess, dashboardFailure, dashboardSuccess, deleteSuccess, unblockSuccess } from "./action";
import { UserModel } from "../../../models/auth";
import { state } from "@angular/animations";
import { TutorModel } from "../../../models/tutor";

interface UserLists {
    userlist: UserModel[],
    tutorlist: TutorModel[]
}

interface DashboardState {
    list: UserLists,
    errormessage: string
}

const initialState: DashboardState = {
    list: { userlist: [], tutorlist: [] },
    errormessage: "",

}


const _dashboardReducer = createReducer(
    initialState,
    on(dashboardSuccess, (state, action) => {
        console.log('b4 action')
        console.log(action)
        return {
            ...state,
            list: {
                userlist: [...action.list.userlist],
                tutorlist: [...action.list.tutorlist],
                errormessage: ""
            }

        }
    }),

    on(dashboardFailure , (state , action)=>{
        return{
            ...state,
        }
    }),

    on(deleteSuccess, (state, { user }) => {
        const newList = state.list.userlist.filter(data => data._id !== user._id)
        return {
            ...state,
            list: {
                ...state.list,
                userlist: newList,
            },
            errormessage: ""
        }
    }),

    on(blockSuccess, (state, { user }) => {
        const newList = state.list.userlist.map(data => {
            if (data._id === user._id) {
                return { ...data, isBlocked: true }
            }
            return data
        })
        return {
            ...state,
            list: {
                ...state.list,
                userlist : newList
            },
            errormessage: ""
        }
    }),

    on(unblockSuccess, (state, { user }) => {
        const newList = state.list.userlist.map(data => {
            if (data._id === user._id) {
                return { ...data, isBlocked: false }
            }
            return data
        })
        return {
            ...state,
            list: {
                ...state.list,
                userlist : newList
            },
            errormessage: ""
        }
    })
)

export function dashboardReducer(state: any, action: any) {
    return _dashboardReducer(state, action)
}

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const getUsersList = createSelector(
    selectDashboardState,
    (state) => state.list.userlist
);

export const getTutorList = createSelector(
    selectDashboardState,
    (state) => state.list.tutorlist
);



// export const getState = createSelector(
//     selectAuthState,
//     (state)=> state
// )








