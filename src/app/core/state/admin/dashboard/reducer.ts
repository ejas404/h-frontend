
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { blockSuccess, courseAddSuccess, courseDetailsSuccess, dashboardFailure, dashboardSuccess, deleteSuccess, unblockSuccess } from "./action";
import { UserModel } from "../../../models/auth";
import { DashboardState, UserListsModel } from "app/core/models/dashboard_model";

const initialState: DashboardState = {
    list: { userlist: [], tutorlist: [] },
    course: { courseDetails: [], tutorCourses: [] },
    errormessage: "",
}

const _dashboardReducer = createReducer(
    initialState,
    on(dashboardSuccess, (state, action) => {
        return {
            ...state,
            list: {
                userlist: [...action.list.userlist],
                tutorlist: [...action.list.tutorlist],
                errormessage: ""
            }

        }
    }),

    on(deleteSuccess, (state, { user, listName }) => {
        const newList = state.list[listName as keyof UserListsModel].filter(data => data._id !== user._id)
        return {
            ...state,
            list: {
                ...state.list,
                [listName]: newList,
            },
            errormessage: ""
        }
    }),

    on(blockSuccess, (state, { user, listName }) => {
        const newList = state.list[listName as keyof UserListsModel].map(data => {
            if (data._id === user._id) {
                return { ...data, isBlocked: true }
            }
            return data
        })
        return {
            ...state,
            list: {
                ...state.list,
                [listName]: newList
            },
            errormessage: ""
        }
    }),

    on(unblockSuccess, (state, { user, listName }) => {
        const newList : UserModel[] = state.list[listName as keyof UserListsModel].map((data: UserModel) => {
            if (data._id === user._id) {
                return { ...data, isBlocked: false }
            }
            return data
        })
        return {
            ...state,
            list: {
                ...state.list,
                [listName]: newList
            },
            errormessage: ""
        }
    }),

    on(courseDetailsSuccess, (state, { successResponse }) => {
        return {
            ...state,
            course: {
                ...state.course,
                tutorCourses: successResponse.tutorCourses,
                courseDetails: successResponse.courseDetails
            }
        }
    }),
    on(courseAddSuccess, (state, { newCourse }) => {
        let existingCourses = state.course.courseDetails.slice()
        existingCourses.push(newCourse)
        return {
            ...state,
            course: {
                ...state.course,
                courseDetails: existingCourses

            }
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

export const getCourseList = createSelector(
    selectDashboardState,
    (state) => state.course
)







