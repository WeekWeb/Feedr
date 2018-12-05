import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../register.service";
import {LoginService} from  "../login.service";
import {Router} from "@angular/router";
import {User} from "../appModels/User.model";
import {UserLogin} from "../appModels/UserLogin.model";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user:User;
  userlogin: UserLogin;
  constructor(private rou: Router, private reg: RegisterService, private login: LoginService) {
    this.user = new User;
    this.userlogin = new UserLogin();
    this.userlogin.email="";
    this.userlogin.password="";
    this.user.organizationName="";
    this.user.password="";
    this.user.email="";
    this.user.defaultLocation="";
  }
  signupSubmit(){
    this.reg.registerAccount(this.user).subscribe(
      result => {
        // Handle result
        localStorage.setItem('hash',result.hash);
        localStorage.setItem('email',result.email);
      },
      error => {

      },
      () => {
        this.rou.navigateByUrl('/admin');
      }
    );
  }

  loginSubmit(){
    this.login.loginAccount(this.userlogin).subscribe(//
      result => {
        // Handle result
        localStorage.setItem('hash',result.hash);
        localStorage.setItem('email',result.email);
      },
      error => {

      },
      () => {
        this.rou.navigateByUrl('/admin');
      }
    );
  }



  ngOnInit() {

  }


}
