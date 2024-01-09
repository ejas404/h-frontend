import { CourseDetailsResponse, TutorDetailsWithCourse } from "./course";

export interface AdminCourseTutorResponse {
    courseDetails: CourseDetailsResponse[],
    tutorCourses: TutorDetailsWithCourse[]
  }