import { Injectable } from "@angular/core";
//import { User } from "../model/user";
import {HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http"
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators"
import { URLS } from "../constants/url.constants";
import { AppErrorHandler } from "../model/app.errorhandler";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { map } from "rxjs/operators";

@Injectable()
export class UserService{

    url = 'http://localhost:8080/users';
    constructor(public httpClient:HttpClient){
    }

    httpErrorHandler(err:HttpErrorResponse):Observable<AppErrorHandler>{
        let appError = new AppErrorHandler();
        appError.status=err.status;
        appError.message='$(err.url} ${err.statusText}';
        appError.url=err.url;
        appError.statusText=err.statusText;
        return ErrorObservable.create(appError);
    }

    getAllUsers() {
        return this.httpClient
        .get(this.url)
        .pipe(
            map((res:any) =>{
            return res;
        })
        );
    }
    registerUser(user){
        console.log("this is from  user service method")
        console.log(user);
        return this.httpClient.post("http://localhost:8080/users/createUser/",user,{
            headers: new HttpHeaders({
                'Content-type':'application/json'
            })
        })
    }

    validateUser(obj){
        console.log("this is from  user service validate user method")
        console.log(obj);
        console.log("validate user.....")
        return this.httpClient.post("http://localhost:8080/users/validateUser/",obj,{
            headers: new HttpHeaders({
                'Content-type':'application/json'
            })
        })/* 
            .map(user => {
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }) */

    }
}