import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigate(['/homescreen/dashboard']);  
  }

  spaces() {
    this.router.navigate(['/homescreen/spaces']);  
  }

  groups() {
    this.router.navigate(['/homescreen/groups']);  
  }

  survey() {
    this.router.navigate(['/homescreen/survey']);  
  }

}
