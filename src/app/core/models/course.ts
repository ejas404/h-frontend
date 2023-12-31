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
    request ?: string
}

export interface TutorDetailsWithCourse{
    _id : string , 
    name  : string
}

export interface CourseGetResponse  {
    courseDetails : CourseDetailsResponse[] , 
    tutorCourses : TutorDetailsWithCourse []
  }
