import { createAction , props } from "@ngrx/store"
import { UserModel } from "../../../models/auth"
import { TutorModel } from "../../../models/tutor"
import { CourseDetailsResponse, CourseGetResponse } from "../../../models/course"
import { UserDetailsTableModel } from "../../../models/table.model"

interface UserLists{
    userlist : UserModel[],
    tutorlist : TutorModel[]
}

export const dashboardRequest = createAction(
    '[Dashboard] dashboard request'
)


export const dashboardSuccess = createAction(
    '[Dashboard] dashboard success',
    props<{list : UserLists}>()
)

export const dashboardFailure = createAction(
    '[Dashboard] dashboard failure',
    props<{error : string}>()
)

export const deleteUser = createAction(
    '[Dashboard] delete user',
    props<{id : string}>()
)

export const deleteSuccess = createAction(
    '[Dashboard] delete success',
    props<{user : UserModel | TutorModel}>()
)

export const deletefailure = createAction(
    '[Dashboard] delete failure',
    props<{error : string}>()
)




/// actions for blocking a student


export const blockRequest = createAction(
    '[Dashboard] block user',
    props<{user_id : string }>()
)

export const blockSuccess = createAction(
    '[Dashboard] block success',
    props<{user : UserModel | TutorModel}>()
)

export const blockFailure = createAction(
    '[Dashboard] block failure',
    props<{error : string}>()
)



/// actions for unblocking a student

export const unblockRequest = createAction(
    '[Dashboard] unblock user',
    props<{user_id : string }>()
)

export const unblockSuccess = createAction(
    '[Dashboard] unblock success',
    props<{user : UserModel | TutorModel}>()
)

export const unblockFailure = createAction(
    '[Dashboard] unblock failure',
    props<{error : string}>()
)



export const courseAddSuccess = createAction(
    '[Dashboard] course add success',
    props<{newCourse : CourseDetailsResponse}>()
)



export const courseDetailsSuccess = createAction(
    '[Dashboard] course details success',
    props<{successResponse : CourseGetResponse}>()
)


export const deleteTutorSuccess = createAction(
    '[DashboardTutor] delete tutor success',
    props<{tutor : TutorModel}>()
)


export const blockTutorSuccess = createAction(
    '[DashboardTutor] block tutor success',
    props<{tutor : TutorModel}>()
)

export const unblockTutorSuccess = createAction(
    '[DashboardTutor] unblock tutor success',
    props<{tutor : TutorModel}>()
)
