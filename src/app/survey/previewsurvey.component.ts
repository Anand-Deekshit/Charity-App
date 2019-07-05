import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateSurveyService } from 'src/app/survey/createsurvey.service';
import { Survey } from 'src/app/Survey';

@Component({
  selector: 'app-survey',
  templateUrl: './previewsurvey.component.html',
  styleUrls: ['./previewsurvey.component.css'],
})
export class PreviewSurveyComponent implements OnInit {

    private currentSurvey: Survey;
  constructor(private router: Router, private createSurveyService: CreateSurveyService) { }

  ngOnInit() {
      this.currentSurvey = this.createSurveyService.getCurrentSurvey();
     
  }

  saveSurvey(){
    this.createSurveyService.createSurvey(this.currentSurvey);
    console.log(this.currentSurvey);
  }

}