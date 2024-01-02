import { createAction, props } from "@ngrx/store";
import { CourseDetailsResponse } from "../../../models/course";

export const singleCourseDetailsSuccess = createAction(
    '[Admin] single course details success',
    props<{courseDetails : CourseDetailsResponse}>()
)


export const courseCoverUpdateSuccess = createAction(
    '[Admin] update course cover success',
    props<{msg : string , path : string}>()
)

export const courseUpdateSuccess = createAction(
    '[Admin] update course success',
    props<{updatedCourse : CourseDetailsResponse}>()
)

export const courseApproveSuccess = createAction(
    '[Admin] approve course success',
    props<{courseDetails : CourseDetailsResponse}>()
)