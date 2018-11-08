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
  testingFunction(event){//example how to subscribe to service and handle error/data
    this.cs.AdminAddContent({
      "name": "happy",    //submit the data. For example, for login the data will be a json containing username and password
      "date": "3/3/1990",
      "location": "123"
    }).subscribe(data=>{
      console.log(data);  //handle response if request is successfull, data contain the response data
    }, (error)=>{   //handle error if request is not successfull
      console.log(error);
    });
    return false;
  }

}
