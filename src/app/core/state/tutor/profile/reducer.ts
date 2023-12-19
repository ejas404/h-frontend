import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TutorProfState } from "../../../models/student";
import { getTutorSuccess } from "./action";


const initialState: TutorProfState = {
    tutorData: null
}

const _profileReducer = createReducer(
    initialState,
    on(getTutorSuccess, (state, { tutorData }) => {
        return {
            ...state,
            tutorData : tutorData
        }
    })

)


export function tutorProfReducer(state : any, action : any){
    return _profileReducer(state,action)
}

export const selectTutorProfState = createFeatureSelector<TutorProfState>('tutorProf')

export const getTutorStoreData = createSelector(
    selectTutorProfState,
    (state) => state.tutorData
  );
