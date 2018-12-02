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
  public foodType;
  public events;

  constructor(private eventService: EventService, private foodTypeService: FoodTypeService) {

  }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data) => this.events = data);
    this.foodTypeService.foodType.subscribe((type) => this.foodType = type);
  }

}
