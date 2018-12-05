import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable, EMPTY, throwError } from 'rxjs';
import { HttpHeaders} from "@angular/common/http";
import { catchError} from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()

export class sessionInterceptor implements HttpInterceptor{//interceptor will intercept the request before it is sent to server and intercept response before it reach browser

  constructor(private rou: Router){

  }
  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let request = req.clone({
      headers: req.headers.set('token', localStorage.getItem("hash"))
    });
    return next.handle(request).pipe(
      catchError( err => {
        if(err.status == 400){
          console.log("Some fields are empty or user already exist");
          console.log("400");
        }
        if (err.status == 404){
          console.log("404");
        }
        if (err.status == 401){
          console.log("Unauthurized. Please login again");
          if(this.rou.url == "/admin"){
            localStorage.setItem("hash","");
            localStorage.setItem("email","");
            this.rou.navigateByUrl("/home");
          }
        }
        if(err.status == 403){
          console.log("403");
        }
        if(err.status == 500){
          console.log("Bad email+hash or bad server error. Please login again");
          if(this.rou.url == "/admin"){
            localStorage.setItem("hash","");
            localStorage.setItem("email","");
            this.rou.navigateByUrl("/home");
          }
        }
        else{
        }
        return throwError(err);
      })
    )
  }
}
