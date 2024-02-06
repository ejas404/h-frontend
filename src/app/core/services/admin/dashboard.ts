import { Observable } from 'rxjs';
import { BASE_URL } from '../../constant/uri';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/auth';
import { TutorModel } from '../../models/tutor';


interface UserLists {
  userlist: UserModel[],
  tutorlist: UserModel[]
}


@Injectable({providedIn : 'root'})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserLists>(`${BASE_URL}/admin/users`)
  }

  updateUser(userData: UserModel){
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/update`, userData)
  }

  // dynamically changes for tutor and users

  deleteUser(id: string,user : string){
    return this.http.delete<UserModel>(`${BASE_URL}/admin/${user}/${id}`)
  }

  blockUser(id: string,user : string){
    return this.http.put<UserModel>(`${BASE_URL}/admin/${user}/block/${id}`, {})
  }

  unblockUser(id: string,user : string){
    return this.http.put<UserModel>(`${BASE_URL}/admin/${user}/unblock/${id}`, {})
  }

}
