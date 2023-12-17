import { createAction, props } from "@ngrx/store";
import { AuthSuccessResponse, LoginCredential, RegisterModel, UserModel } from "../../models/auth";


/// actions for login request

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

/// actions for signup request


export const studentSignup = createAction(
    '[Student] signup Request',
    props<{studentData : RegisterModel }>()
)


export const tutorSignup = createAction(
    '[Tutor] signup Request',
    props<{tutorData : RegisterModel }>()
)


export const submitSuccess = createAction(
    '[Submit] submit Success',
    props<{successResponse : UserModel}>()
)

export const submitFail = createAction(
    '[Submit] submit failure',
    props<{error : string}>()
)


//action for success login response

export const loginSuccess = createAction(
    '[Auth] login Success',
    props<{successResponse : AuthSuccessResponse}>()
)

//action for login response failure

export const loginFailure = createAction(
    '[Auth] login Failure',
    props<{error : string}>()
)