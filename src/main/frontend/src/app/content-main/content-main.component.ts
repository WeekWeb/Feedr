import {Component, OnInit} from '@angular/core';
import { FormsModule} from "@angular/forms";
import { SearchBarFilterPipe } from "../search-bar-filter.pipe";
import {EventService} from "../event.service";
import {EventContent} from "../appModels/EventContent.model";
import {FoodTypeService} from "../food-type-service.service";

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
  public foodType;

  constructor(private eventService: EventService, private foodTypeService: FoodTypeService) {
    this.eventService.getAllEvents().subscribe((data) => this.events = data,
      error => {console.log('cant get events')},
      ()=>{
        for(var i = 0; i < this.events.length; i++){
          this.datearray = this.javaDateToNgDate(this.events[i].timeOfEvent.toString());
          this.events[i].timeOfEvent = this.datearray[0] + " "  + this.datearray[1];
          //this.eventstime.push( datearray[1]);
        }
        for(var i = 0; i < this.events.length; i++){
          this.datearray_2 = this.events[i].timeOfEvent.split(" ");
          this.mdys.push(this.datearray_2[0]);
          this.eventstime.push(this.datearray_2[1]);
        }
      });
  }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data) => this.events = data);
    this.foodTypeService.foodType.subscribe((type) => this.foodType = type);
  }

  javaDateToNgDate(str: string) {
    var javadate = str.split('T');
    var mdy = javadate[0];
    var time = javadate[1].split('.');
    var time_ = time[0].split(':');
    var datearray = [];
    datearray.push(mdy);
    datearray.push(time_[0] + ':' + time_[1]);
    return datearray;
  }

}
