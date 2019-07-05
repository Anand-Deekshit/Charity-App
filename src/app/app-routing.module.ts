import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginComponent } from 'src/app/login-page/login-page-component';
import { SignupPageComponent } from 'src/app/signup-page/signup-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpacesComponent } from './spaces/spaces.component';
import { GroupsComponent } from './groups/groups.component';
import { SurveyComponent } from './survey/survey.component';
import { AuthGuard } from '../app/login-page/auth.guard';
import {PreviewSurveyComponent} from './survey/previewsurvey.component';
import { CreateSurveyComponent } from './survey/createsurvey.component';
import { MyQuestionsComponent } from './survey/myquestions.component';
import { MySurveyComponent } from './survey/mysurvey.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser/src/dom/events/hammer_gestures';


const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'homescreen', component : HomeScreenComponent , canActivate: [AuthGuard],
  children : [{path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]}, 
  {path : 'spaces', component : SpacesComponent, canActivate: [AuthGuard]}, 
  {path : 'groups', component : GroupsComponent, canActivate: [AuthGuard]}, 
  {path : 'survey', component : SurveyComponent, canActivate: [AuthGuard] ,
    children: [{path : 'createsurvey', component : CreateSurveyComponent, canActivate: [AuthGuard] }, {path : 'previewsurvey', component : PreviewSurveyComponent, canActivate: [AuthGuard] }, {path : 'mysurvey', component : MySurveyComponent, canActivate: [AuthGuard] }, {path : 'myquestions', component : MyQuestionsComponent, canActivate: [AuthGuard] }]}]},
  {path : 'signup', component : SignupPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
