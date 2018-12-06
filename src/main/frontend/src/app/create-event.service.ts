import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EventContent} from "./appModels/EventContent.model";
import {Token} from "./appModels/Token.model";
@Injectable({
  providedIn: 'root'
})
export class CreateEventService {
  constructor(private http: HttpClient) {
  }
  createEvent(event: EventContent):Observable<any>{
    return this.http.post('https://feedr.weekweb.us/event', event, {responseType: 'text'});
  }
  deleteEvent(event: EventContent):Observable<any>{
    return this.http.post('https://feedr.weekweb.us/event/delete', event, {responseType: 'text'});
  }
}
