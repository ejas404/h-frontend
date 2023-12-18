import { createAction , props } from "@ngrx/store"
import { UserModel } from "../../../models/auth"

export const dashboardRequest = createAction(
    '[Dashboard] dashboard request'
)


export const dashboardSuccess = createAction(
    '[Dashboard] dashboard success',
    props<{list : UserModel[]}>()
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
    props<{user : UserModel}>()
)

export const deletefailure = createAction(
    '[Dashboard] delete failure',
    props<{error : string}>()
)

export const updateRequest = createAction(
    '[Dashboard] update user',
    props<{userData : UserModel}>()
)

export const updateSuccess = createAction(
    '[Dashboard] update success',
    props<{user : UserModel}>()
)

export const updateFailure = createAction(
    '[Dashboard] update failure',
    props<{error : string}>()
)


/// actions for blocking a student


export const blockRequest = createAction(
    '[Dashboard] block user',
    props<{user_id : string }>()
)

export const blockSuccess = createAction(
    '[Dashboard] block success',
    props<{user : UserModel}>()
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
    props<{user : UserModel}>()
)

export const unblockFailure = createAction(
    '[Dashboard] unblock failure',
    props<{error : string}>()
)


