import { Component, OnInit } from '@angular/core';
import {EventContent} from "../appModels/EventContent.model";
import {CreateEventService} from "../create-event.service";
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: EventContent;
  eventdate: string;
  eventtime: string;

  constructor(private ces: CreateEventService) {
    this.event = new EventContent();
  }

  createSubmit(){
    this.event.timeOfEvent = this.ngDatetoJavaDate();
    this.event.ownerEmail = localStorage.getItem("email");
    this.ces.createEvent(this.event).subscribe(data=>{
    },error=>{
      console.log("cant create event");
    },()=>{

    })
  }
  ngDatetoJavaDate(){
    return this.eventdate+'T'+this.eventtime+':00.000+0000';
  }
  ngOnInit() {
  }

}
