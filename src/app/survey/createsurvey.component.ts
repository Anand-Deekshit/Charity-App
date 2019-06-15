import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from './options-modal/options-modal.services'
import {Question} from '../../app/Question';
import {Survey} from '../../app/Survey';
import {Option} from '../../app/Option';
import { Alert } from 'selenium-webdriver';
import { CreateSurveyService } from 'src/app/survey/createsurvey.service';
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-survey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css'],
})
export class CreateSurveyComponent implements OnInit {

    private questionsArray:Array<Question> = [];
    private optionsArray: Array<Option> = [];
    private newQuestion: Question;
    private newOption: Option;
    private newSurvey:Survey;
    private question: Question;
  constructor(private router: Router, private modalService: ModalService, private createSurveyService: CreateSurveyService) {
    this.initializeQuestion();
    this.initializeOptions();
    this.newSurvey = new Survey();
    this.newSurvey.surveyQuestions = [];
   }

  ngOnInit() {
  }

  initializeQuestion(){
    this.newQuestion = new Question();
    this.newQuestion.questiontype = 0;
    this.newQuestion.question = "";
    this.newQuestion.questionOptions = [];
    this.questionsArray.push(this.newQuestion)
  }

  initializeOptions(){
    this.newOption = new Option();
    this.newOption.optionvalue = "";
    this.optionsArray.push(this.newOption);
  }

addQuestion() {
    this.newQuestion = new Question();
    this.newQuestion.questionOptions = [];
    this.questionsArray.push(this.newQuestion);
}

deleteQuestion(index) {
    this.questionsArray.splice(index, 1);
}

addOption() {
  this.newOption = new Option();
  this.optionsArray.push(this.newOption);

}

deleteOption(index) {
  this.optionsArray.splice(index, 1);
}

openModal(question) {
  this.question = question;
  if(this.newQuestion.questiontype == 2 || this.newQuestion.questiontype == 3){
    if(this.optionsArray.length == 0){
      this.initializeOptions();
    }
    this.modalService.modalOpen();
  }
}

reviewOptions(question){
  this.question = question;
  this.optionsArray = this.question.questionOptions;
  this.modalService.modalOpen();
}

closeModal() {
  this.optionsArray = [];
  this.modalService.modalClose();
}

submitOptions(){
  this.question.questionOptions = [];
  for(var i = 0; i < this.optionsArray.length; i++){
    this.question.questionOptions.push(this.optionsArray[i]);
  }
  this.optionsArray = [];
  this.newOption = new Option();
  this.closeModal();
}

createSurvey(){
  this.newSurvey.surveyQuestions  = Object.assign([], this.questionsArray);
  this.createSurveyService.setCurrentSurvey(this.newSurvey);
  this.router.navigate(['/homescreen/survey/previewsurvey'])
  console.log(this.newSurvey);
  //this.createSurveyService.createSurvey(this.newSurvey);
}
}