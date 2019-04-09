import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  private doctors : any[];


  constructor(public rest:HealthtrakService) {
    this.getDoctors();
   }

   getDoctors() {
    this.rest.getDoctors().subscribe(doctors => {
    console.log("It works");
    this.doctors =  doctors.doctor as any[];
    console.log(this.doctors);
    //this.products = data;
    });
  //console.log(this.items);
  }

  ngOnInit() {
  }

}
