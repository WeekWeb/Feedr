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

    });
    return next.handle(request).pipe(//handle error from response. we handle error here because we dont want to handle it at each component that make request
      catchError( err => {
        if (err.status == 404) {
          console.log("404");
        }
        if (err.status == 401){
          console.log("401");
        }
        if(err.status == 403){
          console.log("403");
        }else{
        }
        return throwError(err);
      })
    )
  }
}
