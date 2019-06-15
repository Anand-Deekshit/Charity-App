import { Injectable } from '@angular/core';
import { Survey } from 'src/app/Survey';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http/src/response';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CreateSurveyService{

    private curentSurvey: Survey;
    private userUrl = 'http://localhost:8080/charity/users/';
    constructor(private http: HttpClient){}

    createSurvey(newSurvey: Survey){
      var postUrl = 'http://localhost:8080/charity/createsurvey/';
      let headers      = new Headers({ 'Content-Type': 'application/json' }); 
      let options       = new RequestOptions({ headers: headers }); 
      var body  = JSON.stringify(newSurvey);
      console.log(body);
      return this.http.post(postUrl,body,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(map(data => {})).subscribe(result => {console.log(result)});
      
    }

    setCurrentSurvey(currentSurvey: Survey){
        this.curentSurvey = currentSurvey;
    }

    getCurrentSurvey(){
        return this.curentSurvey;
    }
}