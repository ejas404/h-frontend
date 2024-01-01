import { Observable } from 'rxjs';
import { BASE_URL } from '../../constant/uri';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/auth';
import { getAdminHeaders } from '../../utils/header';
import { CourseDetails, CourseDetailsResponse, TutorDetailsWithCourse } from '../../models/course';


interface UserLists{
  userlist : UserModel[],
  tutorlist : UserModel[]
}



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) { }

  

  getUsers() : Observable<UserLists>{
    let headers = getAdminHeaders()
    return this.http.get<UserLists>(`${BASE_URL}/admin/users`,{headers})
  }

  deleteUser(id : string): Observable<UserModel>{
    let headers = getAdminHeaders()
    return this.http.delete<UserModel>(`${BASE_URL}/admin/users/${id}`,{headers})
  }

  updateUser(userData : UserModel) : Observable<UserModel>{
    let headers = getAdminHeaders()
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/update`,userData,{headers})
  }

  blockUser(id : string): Observable<UserModel>{
    let headers = getAdminHeaders();
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/block/${id}`, {}, { headers})
  }

  unblockUser(id : string): Observable<UserModel>{
    let headers = getAdminHeaders()
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/unblock/${id}`,{}, {headers})
  }

  addCourse(data : CourseDetails){
    let headers = getAdminHeaders()
    return this.http.post<CourseDetails>(`${BASE_URL}/admin/add-course`,data, {headers})
  }

  getCourses(){
    let headers = getAdminHeaders()

     interface Resonse  {
      courseDetails : CourseDetailsResponse[] , 
      tutorCourses : TutorDetailsWithCourse []
    }

    return this.http.get<Resonse>(`${BASE_URL}/admin/courses`,{headers})
  }
}
