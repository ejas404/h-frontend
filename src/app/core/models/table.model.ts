// student - model and Tutor- model
import { UserModel } from "./auth"
import { CourseDetailsResponse, TutorDetailsWithCourse } from "./course"

export type TableHeaderModel = {
    title : string,
    tBodyKey : string 
}

export interface UserDetailsTableModel extends UserModel {
    [tBodyKey : string] : string | undefined | null | boolean
}

export interface CourseDetailsTableModel extends CourseDetailsResponse{
    [tBodyKey : string] : string | undefined | null | boolean | number | TutorDetailsWithCourse
}

export interface DropdownFilterModel {
    value : string, 
    text : string
}

