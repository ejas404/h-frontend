import { SectionResponse, VideoResponseModel } from "./section_video_model"

export interface CourseDetails {
    _id ?: string,
    title : string,
    tutor ?: string,
    fee : number,
    description : string
}


export interface CourseDetailsResponse{
    _id ?: string,
    title : string,
    fee : number,
    description : string,
    tutor : TutorDetailsWithCourse,
    isAvailable : boolean,
    cover ?: string,
    isTutorMade ?: boolean,
    isApproved ?: boolean,
    request ?: string,
    category ?: string | {name : string},
    subCategory ?: string | {name : string}
}

export interface UpcomingCourse{
    _id ?: string,
    title : string,
    description : string,
    tutor : TutorDetailsWithCourse,
    cover ?: string,
    category : string,
    subCategory : string
}



export interface TutorDetailsWithCourse{
    _id : string , 
    name  : string
}

export interface CourseGetResponse  {
    courseDetails : CourseDetailsResponse[] , 
    tutorCourses : TutorDetailsWithCourse []
}

export interface CourseVideoResponseList extends SectionResponse {
    courseVideos : VideoResponseModel[]
}


export interface CategoryModel{
    _id ?: string
    name : string
    description : string
}

export interface SubCategoryModel extends CategoryModel{
    category : string
}


