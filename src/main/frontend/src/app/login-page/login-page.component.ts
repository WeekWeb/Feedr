import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../app-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private rou: Router) { }


  ngOnInit() {
  }


}
