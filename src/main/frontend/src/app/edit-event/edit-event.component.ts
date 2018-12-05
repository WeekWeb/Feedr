import { Component, OnInit,Input } from '@angular/core';
import {EventContent} from "../appModels/EventContent.model";
import {CreateEventService} from "../create-event.service";
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() event: EventContent;
  @Input() mdy : string;
  @Input() eventtime : string;
  @Input() idnum: number;

  mdyedit: string;
  timeedit: string;
  eventedit: EventContent;

  constructor(private ces: CreateEventService) {

  }

  editSubmit(){
    console.log(this.eventedit.name);
    this.ces.createEvent(this.eventedit).subscribe(data=>{
      console.log("success");
    },error=>{
      console.log(error);
    },()=>{
      location.reload();
    })
  }

  editClose(){
    this.eventedit.name = this.event.name;
    this.eventedit.location = this.event.location;
    this.eventedit.description = this.event.description;
    this.eventedit.typeOfFood = this.event.typeOfFood;
    this.eventedit.id = this.event.id;
    this.eventedit.ownerEmail = this.event.ownerEmail;
    this.eventedit.timeOfEvent = this.event.timeOfEvent;
    console.log(this.mdy);
    this.mdyedit = this.mdy;
    this.timeedit = this.eventtime;
  }

  ngDatetoJavaDate(){
    return this.mdyedit+'T'+this.timeedit+':00.000+0000';
  }

  nameChange(e){
    this.eventedit.name = e.target.value;
  }
  locationChange(e){
    this.eventedit.location = e.target.value;
  }
  mdyChange(e){
    this.mdyedit = e.target.value;
    this.eventedit.timeOfEvent = this.ngDatetoJavaDate();
  }
  timeChange(e){
    this.timeedit = e.target.value;
    this.eventedit.timeOfEvent = this.ngDatetoJavaDate();
  }

  decChange(e){
    this.eventedit.description = e.target.value;
  }

  tyepChange(e){
    this.eventedit.typeOfFood = e.target.value;
  }

  ngOnInit() {
    this.eventedit = new EventContent();
    this.eventedit.name = this.event.name;
    this.eventedit.location = this.event.location;
    this.eventedit.description = this.event.description;
    this.eventedit.typeOfFood = this.event.typeOfFood;
    this.eventedit.id = this.event.id;
    this.eventedit.ownerEmail = this.event.ownerEmail;
    this.eventedit.timeOfEvent = this.event.timeOfEvent;

    this.mdyedit = this.mdy;
    this.timeedit = this.eventtime;
  }

}
