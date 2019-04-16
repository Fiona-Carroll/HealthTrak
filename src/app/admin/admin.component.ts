import { Component, OnInit } from '@angular/core';

// Components are the most basic building block of a UI in an Angular Application
// An Angular Application is a tree of Angular Components
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

// OnInIt is a lifecycle hook which gets called after the constructor is
// called and all the variables have been initialised
// Components must implement OnInIt in order to use it
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
