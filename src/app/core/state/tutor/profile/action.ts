import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../../models/auth";

export const getTutorData = createAction(
    '[Tutor] get data'
)

export const getTutorSuccess = createAction(
    '[Tutor] get data success',
    props<{ tutorData : UserModel}>()
)

export const getTutorFail = createAction(
    '[Tutor] get data failure',
    props<{error : string}>()
)