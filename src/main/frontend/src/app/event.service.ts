import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EventContent} from "./appModels/EventContent.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventAllUrl = '/event/all';
  private eventUserUrl = '/event/user';

  constructor(private http: HttpClient) { }

  getAllEvents():Observable<EventContent[]>{
    return this.http.get<EventContent[]>('http://localhost:8080/event/all');
  }

  //getUserEvents(username:string, token?:string){
    //create object for request parameters
    //return this.http.get(this.eventUserUrl);
  //}
}
