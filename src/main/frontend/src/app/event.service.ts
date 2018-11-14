import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventAllUrl = '/event/all';
  private eventUserUrl = '/event/user';

  constructor(private http: HttpClient) { }

  getAllEvents(){
    return this.http.get('http://localhost:8080/event/all');
  }

  getUserEvents(username:string, token?:string){
    //create object for request parameters
    return this.http.get(this.eventUserUrl);
  }
}
