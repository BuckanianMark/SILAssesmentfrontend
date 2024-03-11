import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/User';
import { IUserLogin } from '../interfaces/IUserLogin';
import { LOGIN_USER, REGISTER_USER } from '../../constants/url';
import { IUserRegister } from '../interfaces/IUserRegister';
const USER_KEY = 'SIL_iNFORMATICS_USER';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userSubject  = new BehaviorSubject<User>(this.getUserFromLocalStorage())
  public userObservable:Observable<User>;
  constructor(
    private http:HttpClient,
    private toastr:ToastrService) { 
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(LOGIN_USER,userLogin).pipe(
      tap({
        next:(user) => {
          this.setUserToLocalStorage(user)
          this.userSubject.next(user)
          this.toastr.success(
            `Welcome 😉, Logged in as ${user.name}!`
          )
        },error:(err) => {
          this.toastr.error('Login Failed',err.error)
        }
      })
    )
  }
  register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(REGISTER_USER,userRegister).pipe(
      tap({
        next:(user) => {
          
          this.setUserToLocalStorage(user)
          this.userSubject.next(user)
          this.toastr.success(
            `Welcome 😉, Registerd as ${user.name}!`
          )
        },
        error:(err) => {
          console.log("Endpoint hit")
          this.toastr.error(err.error,'Register Failed')
        }
      })
    )
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY,JSON.stringify(user))
  }
  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
 
}
