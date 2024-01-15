import { Observable } from 'rxjs';
import { BASE_URL } from '../../constant/uri';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/auth';
import { getAdminHeaders } from '../../utils/header';
import { CourseDetails, CourseDetailsResponse, TutorDetailsWithCourse } from '../../models/course';
import { TutorModel } from '../../models/tutor';
import { AdminCourseTutorResponse } from '../../models/admin_model';
import { AdminPageComponent } from '../../../pages/admin/admin-page/admin-page.component';



interface UserLists {
  userlist: UserModel[],
  tutorlist: UserModel[]
}


@Injectable({providedIn : 'root'})
export class DashboardService {

  constructor(private http: HttpClient) { }



  getUsers(): Observable<UserLists> {
    return this.http.get<UserLists>(`${BASE_URL}/admin/users`)
  }

  deleteUser(id: string): Observable<UserModel> {
    return this.http.delete<UserModel>(`${BASE_URL}/admin/users/${id}`)
  }

  updateUser(userData: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/update`, userData)
  }

  blockUser(id: string): Observable<UserModel> {
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/block/${id}`, {})
  }

  unblockUser(id: string): Observable<UserModel> {
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/unblock/${id}`, {})
  }

  addCourse(data: CourseDetails) {
    return this.http.post<{ newCourse: CourseDetailsResponse }>(`${BASE_URL}/admin/add-course`, data)
  }

  getCourses() {
    return this.http.get<AdminCourseTutorResponse>(`${BASE_URL}/admin/courses`)
  }

  updateCourseCover(Data: FormData, id: string): Observable<{ msg: string, path: string }> {
    return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/admin/course-cover/${id}`, Data)
  }

  getSingleCourse(id : string){
    return this.http.get<{courseDetails : CourseDetailsResponse}>(`${BASE_URL}/admin/course/${id}`)
  }

  updateCourse(data : CourseDetails , id : string){
    return this.http.put<{ updatedCourse: CourseDetailsResponse }>(`${BASE_URL}/admin/update-course/${id}`, data)
  }

  deleteTutor(id: string): Observable<{tutor : TutorModel}> {
    return this.http.delete<{tutor : TutorModel}>(`${BASE_URL}/admin/tutors/${id}`)
  }

  blockTutor(id: string): Observable<{tutor : TutorModel}> {
    return this.http.put<{tutor : TutorModel}>(`${BASE_URL}/admin/tutors/block/${id}`,{})
  }

  unblockTutor(id: string) {
    return this.http.put<{tutor : TutorModel}>(`${BASE_URL}/admin/tutors/unblock/${id}`, {})
  }

  approveCourseRequest(id : string){
    return this.http.put<{courseDetails : CourseDetailsResponse}>(`${BASE_URL}/admin/course-approve/${id}`, {})
  }

  uploadVideo(Data: FormData): Observable<{ msg: string, path: string }> {
    return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/admin/add-video`, Data)
  }

}
