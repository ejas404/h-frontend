import { UserModel } from "./auth";
import { CourseDetailsResponse, CourseGetResponse } from "./course";
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

export interface PopularCourseModel{
    _id : string
    count : number
    course : CourseDetailsResponse
    tutorDetails : {name : string}
    subcat : {name : string}
}
