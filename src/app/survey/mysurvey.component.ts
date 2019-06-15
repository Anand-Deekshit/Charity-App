import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './mysurvey.component.html',
})
export class MySurveyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}