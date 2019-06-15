import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createSurvey(){
    this.router.navigate(['homescreen/survey/createsurvey']);
  }
  
  mySurvey(){
    this.router.navigate(['homescreen/survey/mysurvey']);
  }

  myQuestions(){
    this.router.navigate(['homescreen/survey/myquestions']);
  }
}
