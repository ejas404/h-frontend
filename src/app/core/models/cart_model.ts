import { CourseDetailsResponse } from "./course"

export interface CartModel{
    course_id : string
    details : CourseDetailsResponse[]
}