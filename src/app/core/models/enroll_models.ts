import { CourseDetailsResponse } from "./course";

export interface EnrollCourseModels {
    _id : string,
    enid : string,
    course : CourseDetailsResponse,
    rating : number,
    isEnrolled : boolean
}

export interface EnrollSubcat{
    subCatDetails : {
        name : string
        _id : string
    }
}

export interface OrderResModel{
    _id : string
    amountPayable : number
    createdAt : Date
}