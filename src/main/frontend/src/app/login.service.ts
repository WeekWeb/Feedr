import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {UserLogin} from "./appModels/UserLogin.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  loginAccount(userlogin: UserLogin):Observable<any>{
    return this.http.post('https://feedr.weekweb.us/login', userlogin);
  }
}
