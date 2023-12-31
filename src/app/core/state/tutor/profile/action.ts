import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../../models/auth";
import { TutorEducation, TutorModel, TutorTagResponse } from "../../../models/tutor";

export const getTutorData = createAction(
    '[Tutor] get data'
)

export const getTutorSuccess = createAction(
    '[Tutor] get data success',
    props<{ tutorData : TutorModel}>()
)

export const getTutorFail = createAction(
    '[Tutor] get data failure',
    props<{error : string}>()
)



export const updateEducationDetails = createAction(
    '[Tutor] update education',
    props<{educationDetails : TutorEducation}>()
)

export const updateEducationSuccess = createAction(
    '[Tutor] update education success',
    props<{ successResponse :{ educationDetails : TutorEducation} }>()
)

export const updateEducationFail = createAction(
    '[Tutor] update education failure',
    props<{error : string}>()
)


export const profilePicUpdateSuccess = createAction(
    '[Tutor] update profile pic success',
    props<{msg : string , path : string}>()
)


export const tutorTagUpdateSuccess = createAction(
    '[Tutor] tag update success',
    props<{msg : string , tutorTag : {tag : string , list : TutorTagResponse }}>()
)

export const tutorEducationDeleteSuccess = createAction(
    '[Tutor] education delete success',
    props<{ successResponse :{ toDelete : TutorEducation} }>()
)