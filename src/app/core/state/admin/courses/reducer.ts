import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { CourseDetailsResponse} from "../../../models/course";
import { courseApproveSuccess, courseCoverUpdateSuccess, courseUpdateSuccess, singleCourseDetailsSuccess } from "./action";

const initialState : CourseDetailsResponse = {
    title : '',
    fee : 0,
    description : '',
    tutor : {name : '' , _id : ''},
    isAvailable : false

}

const _singleCourseReducer = createReducer(
    initialState,

    on(singleCourseDetailsSuccess , (state , action)=>{
        return{
            ...state,
            ...action.courseDetails
        }
    }),

    on(courseCoverUpdateSuccess , (state, action)=>{
        return {
            ...state,
            cover : action.path
        }
    }),
    on(courseUpdateSuccess, (state,action)=>{
        return{
            ...state,
            ...action.updatedCourse
        }
    }),

    on(courseApproveSuccess, (state,action)=>{
        return{
            ...state,
            ...action.courseDetails
        }
    })
)



export function singleCourseReducer(state: CourseDetailsResponse | undefined, action: any) {
    return _singleCourseReducer(state, action)
}

export const selectSingleCourseState = createFeatureSelector<CourseDetailsResponse>('singleCourse');

export const getSingleCourseData = createSelector(
    selectSingleCourseState,
    (state) => state
);