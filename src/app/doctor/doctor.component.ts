import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';

// Components are the most basic building block of a UI in an Angular Application
// An Angular Application is a tree of Angular Components
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

// OnInIt is a lifecycle hook which gets called after the constructor is
// called and all the variables have been initialised
// Components must implement OnInIt in order to use it
export class DoctorComponent implements OnInit {

  private doctors : any[];


  constructor(public rest:HealthtrakService) {
    this.getDoctors();
   }

   // get doctors function
   getDoctors() {
    this.rest.getDoctors().subscribe(doctors => {
    console.log("It works");
    this.doctors =  doctors.doctor as any[];
    console.log(this.doctors);
    });

  }

  ngOnInit() {
  }

}
