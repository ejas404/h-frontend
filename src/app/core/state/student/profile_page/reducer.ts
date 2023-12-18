import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { StudProfState } from "../../../models/student";
import { getUserSuccess } from "./action";
getUserSuccess

const initialState: StudProfState = {
    userData: null
}

const _profileReducer = createReducer(
    initialState,
    on(getUserSuccess, (state, { userData }) => {
        return {
            ...state,
            userData
        }
    })

)


export function studProfReducer(state : any, action : any){
    return _profileReducer(state,action)
}

export const selectStudProfState = createFeatureSelector<StudProfState>('studProf')

export const getStudData = createSelector(
    selectStudProfState,
    (state) => state.userData
  );
