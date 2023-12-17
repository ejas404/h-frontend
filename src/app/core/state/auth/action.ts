import { createAction, props } from "@ngrx/store";
import { AuthSuccessResponse, LoginCredential } from "../../models/auth";

export const adminLoginReq = createAction(
    '[Admin] login Request',
    props<{credentials : LoginCredential }>()
)

export const tutorLoginReq = createAction(
    '[Tutor] login Request',
    props<{credentials : LoginCredential }>()
)

export const studentLoginReq = createAction(
    '[Student] login Request',
    props<{credentials : LoginCredential }>()
)

export const loginSuccess = createAction(
    '[Auth] login Success',
    props<{successResponse : AuthSuccessResponse}>()
)

export const loginFailure = createAction(
    '[Auth] login Failure',
    props<{error : string}>()
)