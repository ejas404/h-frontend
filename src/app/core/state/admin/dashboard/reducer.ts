
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { blockSuccess, blockTutorSuccess, courseAddSuccess, courseDetailsSuccess, dashboardFailure, dashboardSuccess, deleteSuccess, deleteTutorSuccess, unblockSuccess, unblockTutorSuccess } from "./action";
import { UserModel } from "../../../models/auth";
import { state } from "@angular/animations";
import { TutorModel } from "../../../models/tutor";
import { CourseDetailsResponse, TutorDetailsWithCourse } from "../../../models/course";

interface UserLists {
    userlist: UserModel[],
    tutorlist: TutorModel[]
}

interface CourseModel{
    courseDetails : CourseDetailsResponse[],
    tutorCourses : TutorDetailsWithCourse[]
}



interface DashboardState {
    list: UserLists,
    course : CourseModel
    errormessage: string
}

const initialState: DashboardState = {
    list: { userlist: [], tutorlist: [] },
    course : {courseDetails : [] , tutorCourses : []},
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
    }),

    on(courseDetailsSuccess , (state, {successResponse})=>{
        return{
            ...state,
            course : {
                ...state.course,
                tutorCourses : successResponse.tutorCourses,
                courseDetails : successResponse.courseDetails
            }
        }
    }),
    on(courseAddSuccess , (state , {newCourse})=>{
        let existingCourses = state.course.courseDetails.slice()
        existingCourses.push(newCourse)
        return{
            ...state,
            course : {
                ...state.course,
                courseDetails : existingCourses

            }
        }
    }),
    on(deleteTutorSuccess, (state, { tutor }) => {
        const newList = state.list.tutorlist.filter(data => data._id !== tutor._id)
        return {
            ...state,
            list: {
                ...state.list,
                tutorlist: newList,
            },
            errormessage: ""
        }
    }),
    on(blockTutorSuccess, (state, { tutor }) => {
        const newList = state.list.tutorlist.map(data => {
            if (data._id === tutor._id) {
                return { ...data, isBlocked: true }
            }
            return data
        })
        return {
            ...state,
            list: {
                ...state.list,
                tutorlist : newList
            },
            errormessage: ""
        }
    }),

    on(unblockTutorSuccess, (state, { tutor }) => {
        const newList = state.list.tutorlist.map(data => {
            if (data._id === tutor._id) {
                return { ...data, isBlocked: false }
            }
            return data
        })
        return {
            ...state,
            list: {
                ...state.list,
                tutorlist : newList
            },
            errormessage: ""
        }
    }),

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

export const getCourseList = createSelector(
    selectDashboardState,
    (state) => state.course
)



// export const getState = createSelector(
//     selectAuthState,
//     (state)=> state
// )








