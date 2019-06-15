import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './myquestions.component.html',
})
export class MyQuestionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}