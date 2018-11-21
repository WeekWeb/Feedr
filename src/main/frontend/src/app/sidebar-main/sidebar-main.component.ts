import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../app-service.service";
import { EventContent } from "../appModels/EventContent.model";
import { Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.css']
})
export class SidebarMainComponent implements OnInit {
  public ce : EventContent[];
  constructor(private cs: AppServiceService, private rou: Router) { }

  ngOnInit() {
  }


}
