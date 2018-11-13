import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventContent } from "./appModels/EventContent.model";
import { User } from "./appModels/User.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {//Service that submit different request
  configUrlLogin = "login";
  configUrlNormalContent = "normalGetContent";
  configUrlAdminContent = "adminGetContent";
  configUrlAdminEditContent = "adminEditContent";
  configUrlAdminAddContent = "adminAddContent";
  configUrlAdminDelContent = "adminDelContent";
  configUrlSignUp = "signup";
  configUrlLogout = "logout";

  constructor(private http: HttpClient) { }//each function return an observable. You need to call the corresponded function at your component and subscribe to it.

  NormalContent():Observable<EventContent[]>{
    return this.http.get<EventContent[]>("http://localhost:3000/EventContent");
  }

  AdminContent(){
    return this.http.get<EventContent[]>(this.configUrlAdminContent);
  }

  AdminEditContent(ec: EventContent){
    return this.http.patch(this.configUrlAdminEditContent, ec);
  }

  AdminAddContent(ec : EventContent){
    return this.http.post("http://localhost:3000/EventContent", ec);
  }

  AdminDelContent(ec: EventContent){
    return this.http.post(this.configUrlAdminDelContent, ec)
  }

  Login(usr: User){
    return this.http.post(this.configUrlLogin, usr);
  }

  Logout(){
    return this.http.get(this.configUrlLogout);
  }

  Signup(usr: User){
    return this.http.post(this.configUrlSignUp, usr);
  }
}
