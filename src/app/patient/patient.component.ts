import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  private patients : any[];
  public doctorId : string;

  constructor(public rest:HealthtrakService,  private _Activatedroute:ActivatedRoute, private router: Router) { 
    this.doctorId=_Activatedroute.snapshot.params['doctorId'];
    this.getPatients();
  }

  getPatients() {
    this.rest.getPatients(this.doctorId).subscribe(patients => {
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
