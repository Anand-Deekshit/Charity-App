import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './home-screen.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [HomeScreenComponent],
  imports: [
    CommonModule,
    BrowserModule,
    
  ]
})
export class HomeScreenModule { }
