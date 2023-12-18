import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../../models/auth";

export const getUserData = createAction(
    '[Student] get data'
)

export const getUserSuccess = createAction(
    '[Student] get data success',
    props<{ userData : UserModel}>()
)

export const getUserFail = createAction(
    '[Student] get data failure',
    props<{error : string}>()
)