import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-page/login-page-component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomeScreenModule } from './home-screen/home-screen.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {SpacesModule} from './spaces/spaces.module';
import {GroupsModule} from './groups/groups.module';
import {SurveyModule} from './survey/survey.module';
import {HttpClientModule} from '@angular/common/http';
import { SpacesComponent } from 'src/app/spaces/spaces.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeScreenComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashboardModule, 
    SpacesModule,
    GroupsModule,
    SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
