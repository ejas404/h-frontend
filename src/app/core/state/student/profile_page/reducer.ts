import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { StudProfState } from "../../../models/student";
import { getUserSuccess, studentPicUpdateSuccess } from "./action";
getUserSuccess

const initialState: StudProfState = {
    userData: {
        name : '',
        email : ''
    }
}

const _profileReducer = createReducer(
    initialState,
    on(getUserSuccess, (state, { userData }): StudProfState => {
        return {
            ...state,
            userData: userData
        }
    }),

    on(studentPicUpdateSuccess, (state, { msg, path }) : StudProfState => {
        return {
            ...state,
            userData: {
                ...state.userData,
                profile: path
            }
        }
    })

)


export function studProfReducer(state: any, action: any) {
    return _profileReducer(state, action)
}

export const selectStudProfState = createFeatureSelector<StudProfState>('studProf')

export const getStudData = createSelector(
    selectStudProfState,
    (state) => state.userData
);
