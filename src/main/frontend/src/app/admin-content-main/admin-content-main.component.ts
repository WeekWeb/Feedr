import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
@Component({
  selector: 'app-admin-content-main',
  templateUrl: './admin-content-main.component.html',
  styleUrls: ['./admin-content-main.component.css']
})
export class AdminContentMainComponent implements OnInit {

  public term;
  public events;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data) => this.events = data);
    console.log(this.events);
  }


}
