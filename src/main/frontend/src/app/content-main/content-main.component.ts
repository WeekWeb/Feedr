import {Component, OnInit} from '@angular/core';
import { FormsModule} from "@angular/forms";
import { SearchBarFilterPipe } from "../search-bar-filter.pipe";
import {EventService} from "../event.service";
import {EventContent} from "../appModels/EventContent.model";

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})

export class ContentMainComponent implements OnInit {
  public term;
  public events: EventContent[] = [];
  public eventstime = [];
  public mdys = [];
  public datearray = [];
  public datearray_2 = [];
  constructor(private eventService: EventService) {
    this.eventService.getAllEvents().subscribe((data) => this.events = data,
      error => {console.log('cant get events')},
      ()=>{
        for(var i = 0; i < this.events.length; i++){
          this.datearray = this.javaDateToNgDate(this.events[i].timeOfEvent.toString());
          this.events[i].timeOfEvent = this.datearray[0] + " "  + this.datearray[1];
          //this.eventstime.push( datearray[1]);
        }
        this.sortEventDate(this.events);
        for(var i = 0; i < this.events.length; i++){
          this.datearray_2 = this.events[i].timeOfEvent.split(" ");
          this.mdys.push(this.datearray_2[0]);
          this.eventstime.push(this.datearray_2[1]);
        }
      });
  }

  ngOnInit() {

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
