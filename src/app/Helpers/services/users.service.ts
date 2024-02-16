import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERS_BY_ID_URL, USERS_URL } from '../../constants/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  loadAllUser(){
    return this.http.get(USERS_URL)
  }
  loadAUser(userId:string){
    return this.http.get(USERS_BY_ID_URL + userId)
  }
}
