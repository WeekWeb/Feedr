import { Component, OnInit,Input } from '@angular/core';
import {EventContent} from "../appModels/EventContent.model";
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() event: EventContent;
  @Input() idnum : number;
  constructor() { }

  ngOnInit() {
  }

}
