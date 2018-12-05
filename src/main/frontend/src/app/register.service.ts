import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "./appModels/User.model";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  registerAccount(user: User):Observable<any>{
    return this.http.post('http://localhost:8080/signup', user);
  }

}
