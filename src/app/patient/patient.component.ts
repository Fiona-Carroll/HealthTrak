import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  private patients : any[];

  constructor(public rest:HealthtrakService) { 
    this.getPatients();
  }

  getPatients() {
    this.rest.getPatients().subscribe(patients => {
    console.log("It works");
    this.patients =  patients.patient as any[];
    console.log(this.patients);
    //this.products = data;
    });
  //console.log(this.items);
  }

  ngOnInit() {
  }

}
