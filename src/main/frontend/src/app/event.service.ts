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
    return this.http.get<EventContent[]>('https://feedr.weekweb.us/event/all');
  }
  getUserEvents(token:string){
    //create object for request parameters
    return this.http.post('https://feedr.weekweb.us/event/user', token);
  }
}
