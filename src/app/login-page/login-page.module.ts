import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-page-component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class LoginPageModule { }
