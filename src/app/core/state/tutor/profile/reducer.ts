import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TutorEducation, TutorModel, TutorProfState } from "../../../models/tutor";
import { getTutorSuccess, profilePicUpdateSuccess, tutorCourseSuccess, tutorEducationDeleteSuccess, tutorTagUpdateSuccess, updateEducationSuccess } from "./action";
import { CourseDetailsResponse } from "../../../models/course";

interface TutorState extends TutorModel{
    courses ?: CourseDetailsResponse[]
}

const initialState: TutorState = {
    email: '',
    name: '',
    courses : []
}

const _profileReducer = createReducer(
    initialState,
    on(getTutorSuccess, (state, { tutorData }) => {

        return {
            ...state, ...tutorData
        }
    }),

    on(updateEducationSuccess, (state, { successResponse }): TutorModel => {
        let list : TutorEducation[] = []
        if (state?.education) {
           list = state.education.slice()
        }
            list.push(successResponse.educationDetails)
            return {
                ...state,
                education : list

            };

    }),

    on(profilePicUpdateSuccess, (state, {msg ,path})=>{
       
        return {
            ...state,
            profile : path
        }
    }),

    on(tutorTagUpdateSuccess, (state , {msg , tutorTag})=>{

        return{
            ...state,
            [tutorTag.tag] : tutorTag.list 
         
        }
    }),
    on(tutorEducationDeleteSuccess , (state , {successResponse})=>{

        let arr = state.education?.slice()

        arr = arr?.filter(each => each.ed_id !== successResponse.toDelete.ed_id)

        return {
            ...state,
            education : arr
        }
    }),
    on(tutorCourseSuccess, (state,action)=>{
        return{
            ...state,
            courses : action.tutorCourses
        }
    })


    // on(updateEducationSuccess, (state, { successResponse }) => {

    //     let list : TutorEducation[] | undefined = state.tutorData?.education

    //     list?.push(successResponse)

    //     return {
    //         ...state,
    //         tutorData: {
    //             ...state.tutorData,
    //             education: list
    //         }
    //     }
    // })

)


export function tutorProfReducer(state: any, action: any) {
    return _profileReducer(state, action)
}

export const selectTutorProfState = createFeatureSelector<TutorState>('tutorProf')

export const getTutorStoreData = createSelector(
    selectTutorProfState,
    (state) => state
);
