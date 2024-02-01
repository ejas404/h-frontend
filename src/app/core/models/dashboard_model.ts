import { UserModel } from "./auth";
import { CourseGetResponse } from "./course";
import { TutorModel } from "./tutor";

export  interface UserListsModel {
    userlist: UserModel[],
    tutorlist: TutorModel[]
}



export interface DashboardState {
    list: UserListsModel,
    course: CourseGetResponse
    errormessage: string
}
