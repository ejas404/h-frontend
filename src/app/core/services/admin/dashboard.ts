import { Observable } from 'rxjs';
import { BASE_URL } from '../../constant/uri';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/auth';
import { getAdminHeaders } from '../../utils/header';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) { }

  

  getUsers() : Observable<UserModel[]>{
    let headers = getAdminHeaders()
    return this.http.get<UserModel[]>(`${BASE_URL}/admin/users`,{headers})
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
    let headers = getAdminHeaders()
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/block/${id}`,{headers})
  }

  unblockUser(id : string): Observable<UserModel>{
    let headers = getAdminHeaders()
    return this.http.put<UserModel>(`${BASE_URL}/admin/users/unblock/${id}`,{headers})
  }

}
