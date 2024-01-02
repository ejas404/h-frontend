import { Observable } from 'rxjs';
import { BASE_URL } from '../../constant/uri';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/auth';
import { getAdminHeaders } from '../../utils/header';
import { CourseDetails, CourseDetailsResponse, TutorDetailsWithCourse } from '../../models/course';
import { TutorModel } from '../../models/tutor';


interface UserLists {
  userlist: UserModel[],
  tutorlist: UserModel[]
}



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }



  getUsers(): Observable<UserLists> {
    let headers = getAdminHeaders()
    return this.http.get<UserLists>(`${BASE_URL}/admin/users`, { headers })
  }

  deleteUser(id: string): Observable<UserModel> {
    let headers = getAdminHeaders()
    return this.http.delete<UserModel>(`${BASE_URL}/admin/users/${id}`, { headers })
  }

  updateUser(userData: UserModel): Observable<UserModel> {
    let headers = getAdminHeaders()
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/update`, userData, { headers })
  }

  blockUser(id: string): Observable<UserModel> {
    let headers = getAdminHeaders();
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/block/${id}`, {}, { headers })
  }

  unblockUser(id: string): Observable<UserModel> {
    let headers = getAdminHeaders()
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/unblock/${id}`, {}, { headers })
  }

  addCourse(data: CourseDetails) {
    let headers = getAdminHeaders()
    return this.http.post<{ newCourse: CourseDetailsResponse }>(`${BASE_URL}/admin/add-course`, data, { headers })
  }

  getCourses() {
    let headers = getAdminHeaders()

    interface Response {
      courseDetails: CourseDetailsResponse[],
      tutorCourses: TutorDetailsWithCourse[]
    }

    return this.http.get<Response>(`${BASE_URL}/admin/courses`, { headers })
  }

  updateCourseCover(Data: FormData, id: string): Observable<{ msg: string, path: string }> {
    let headers = getAdminHeaders()
    return this.http.put<{ msg: string, path: string }>(`${BASE_URL}/admin/course-cover/${id}`, Data, { headers })
  }

  getSingleCourse(id : string){
    let headers = getAdminHeaders()
    return this.http.get<{courseDetails : CourseDetailsResponse}>(`${BASE_URL}/admin/course/${id}`, { headers })
  }

  updateCourse(data : CourseDetails , id : string){
    let headers = getAdminHeaders()
    return this.http.put<{ updatedCourse: CourseDetailsResponse }>(`${BASE_URL}/admin/update-course/${id}`, data, { headers })
  }

  deleteTutor(id: string): Observable<{tutor : TutorModel}> {
    let headers = getAdminHeaders()
    return this.http.delete<{tutor : TutorModel}>(`${BASE_URL}/admin/tutors/${id}`, { headers })
  }

  blockTutor(id: string): Observable<{tutor : TutorModel}> {
    let headers = getAdminHeaders();
    return this.http.put<{tutor : TutorModel}>(`${BASE_URL}/admin/tutors/block/${id}`, {}, { headers })
  }

  unblockTutor(id: string) {
    let headers = getAdminHeaders()
    return this.http.put<{tutor : TutorModel}>(`${BASE_URL}/admin/tutors/unblock/${id}`, {}, { headers })
  }

}
