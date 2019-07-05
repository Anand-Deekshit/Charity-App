import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { CreateSurveyComponent } from '../survey/createsurvey.component';
import { MyQuestionsComponent } from '../survey/myquestions.component';
import { MySurveyComponent } from '../survey/mysurvey.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './options-modal/options-modal.component';
import { ModalService } from './options-modal/options-modal.services';
import { CreateSurveyService } from './createsurvey.service';
import { PreviewSurveyComponent } from 'src/app/survey/previewsurvey.component';
//import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
//import {NgbdDatepickerBasic} from './datepicker/datepicker.component';


@NgModule({
  declarations: [SurveyComponent, CreateSurveyComponent, PreviewSurveyComponent, MyQuestionsComponent, MySurveyComponent, ModalComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    
  ],
  providers: [
    ModalService,
    CreateSurveyService
  ]
})
export class SurveyModule { }
