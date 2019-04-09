import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Patient } from '../model/patient-model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  private patientDetail : Patient = new Patient();

     constructor(public rest:HealthtrakService) { 
     this.createPatient();
  }

  public createPatient(){
    this.rest.createPatient(this.patientDetail).subscribe(
      patientDetail => {
        console.log("It works");
        this.patientDetail =  patientDetail.patient as Patient;
        console.log(patientDetail);
        // //this.products = data;
        });
  }

  // createPatient() {
  //   this.rest.createPatient().subscribe(patients => {
  //   console.log("It works");
  //   this.patients =  patients.patient as any[];
  //   console.log(this.patients);
  //   //this.products = data;
  //   });
  // //console.log(this.items);
  // }

  ngOnInit() {
  }

}
