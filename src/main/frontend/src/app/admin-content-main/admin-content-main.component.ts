import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import { CreateEventService} from "../create-event.service";
import {Token} from "../appModels/Token.model";
import {EventContent} from "../appModels/EventContent.model";
@Component({
  selector: 'app-admin-content-main',
  templateUrl: './admin-content-main.component.html',
  styleUrls: ['./admin-content-main.component.css']
})
export class AdminContentMainComponent implements OnInit {
  public term;
  public events : EventContent[] = [];
  public token: Token;
  public eventstime = [];
  public mdys = [];
  public datearray = [];
  public datearray_2;
  constructor(private eventService: EventService,private ces: CreateEventService) {
    this.token = new Token;
    var hash = localStorage.getItem("hash");
    var email = localStorage.getItem("email");
    this.token.email = email;
    this.token.hash = hash;
    this.eventService.getUserEvents(this.token).subscribe(data => this.events = data,
      error => {
          console.log("cant get user events");
      },
      ()=>{
        for(var i = 0; i < this.events.length; i++){
          this.datearray = this.javaDateToNgDate(this.events[i].timeOfEvent.toString());
          this.events[i].timeOfEvent = this.datearray[0] + " "  + this.datearray[1];
        }
        this.sortEventDate(this.events);
        console.log(this.events[0].timeOfEvent);

        for(var i = 0; i < this.events.length; i++){
          this.datearray_2 = this.events[i].timeOfEvent.split(" ");
          this.mdys.push(this.datearray_2[0]);
          this.eventstime.push(this.datearray_2[1]);
          this.events[i].timeOfEvent = this.datearray_2[0] + 'T' +this.datearray_2[1] + ':00.000+0000';
        }



      });
  }
  ngOnInit() {

  }
  deleteSubmit(ec: EventContent){
    console.log("123");
    this.ces.deleteEvent(ec).subscribe(data=>{
      console.log(data);
    },error1 => {},()=>{
      location.reload()});
  }

  javaDateToNgDate(str: string){
    var javadate = str.split('T');
    var mdy = javadate[0];
    var time = javadate[1].split('.');
    var time_ = time[0].split(':');
    var datearray = [];
    datearray.push(mdy);
    datearray.push(time_[0]+':'+time_[1]);
    return datearray;
  }

  sortEventDate(es: EventContent[]){
    es.sort(this.dateCompare);
  }

  dateCompare(b, a){
    if(a.timeOfEvent.charAt(0) + a.timeOfEvent.charAt(1) + a.timeOfEvent.charAt(2) + a.timeOfEvent.charAt(3) < b.timeOfEvent.charAt(0) + b.timeOfEvent.charAt(1) + b.timeOfEvent.charAt(2) + b.timeOfEvent.charAt(3)){
      return -1;
    }
    if(a.timeOfEvent.charAt(0) + a.timeOfEvent.charAt(1) + a.timeOfEvent.charAt(2) + a.timeOfEvent.charAt(3) == b.timeOfEvent.charAt(0) + b.timeOfEvent.charAt(1) + b.timeOfEvent.charAt(2) + b.timeOfEvent.charAt(3)){
      if(a.timeOfEvent.charAt(5) + a.timeOfEvent.charAt(6) > b.timeOfEvent.charAt(5) + b.timeOfEvent.charAt(6)){
        return 1;
      }
      if(a.timeOfEvent.charAt(5) + a.timeOfEvent.charAt(6) < b.timeOfEvent.charAt(5) + b.timeOfEvent.charAt(6)){
        return -1;
      }
      if(a.timeOfEvent.charAt(5) + a.timeOfEvent.charAt(6) == b.timeOfEvent.charAt(5) + b.timeOfEvent.charAt(6)){
        if(a.timeOfEvent.charAt(8) + a.timeOfEvent.charAt(9) == b.timeOfEvent.charAt(8) + b.timeOfEvent.charAt(9)){
          if(a.timeOfEvent.charAt(11) + a.timeOfEvent.charAt(12) < b.timeOfEvent.charAt(11) + b.timeOfEvent.charAt(12)){
            return -1;
          }
          if(a.timeOfEvent.charAt(11) + a.timeOfEvent.charAt(12) > b.timeOfEvent.charAt(11) + b.timeOfEvent.charAt(12)){
            return 1;
          }
          if(a.timeOfEvent.charAt(11) + a.timeOfEvent.charAt(12) == b.timeOfEvent.charAt(11) + b.timeOfEvent.charAt(12)){
            if(a.timeOfEvent.charAt(14) + a.timeOfEvent.charAt(15) < b.timeOfEvent.charAt(14) + b.timeOfEvent.charAt(15)){
              return -1;
            }
            if(a.timeOfEvent.charAt(14) + a.timeOfEvent.charAt(15) > b.timeOfEvent.charAt(14) + b.timeOfEvent.charAt(15)){
              return 1;
            }
            if(a.timeOfEvent.charAt(14) + a.timeOfEvent.charAt(15) == b.timeOfEvent.charAt(14) + b.timeOfEvent.charAt(15)){
              return -1;
            }
          }
        }
        if(a.timeOfEvent.charAt(8) + a.timeOfEvent.charAt(9) > b.timeOfEvent.charAt(8) + b.timeOfEvent.charAt(9)){
          return 1;
        }
        if(a.timeOfEvent.charAt(8) + a.timeOfEvent.charAt(9) < b.timeOfEvent.charAt(8) + b.timeOfEvent.charAt(9)){
          return -1;
        }
      }
    }
    if(a.timeOfEvent.charAt(0) + a.timeOfEvent.charAt(1) + a.timeOfEvent.charAt(2) + a.timeOfEvent.charAt(3) > b.timeOfEvent.charAt(0) + b.timeOfEvent.charAt(1) + b.timeOfEvent.charAt(2) + b.timeOfEvent.charAt(3)){
      return 1;
    }
    return 0;
  }

}
