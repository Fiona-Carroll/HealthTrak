import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Patient } from '../model/patient-model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
  public isCreate: boolean = false;
  public isUpdate: boolean = false;
  public isRead: boolean = false;
  public patientId: string;
  private patientDetail : Patient = new Patient();
  // public patientIdd : string = "fsfsfsd";

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router) {
    this.patientId=_Activatedroute.snapshot.params['patientId'];

    if(this.patientId){
      this.isRead = true;
      console.log("patient: "+this.patientId);
      console.log(this.patientId);
      this.getPatientDetail(this.patientId);
    }else{
      this.isCreate = true;
    }
   }

   getPatientDetail(patientId) {
    this.rest.getPatientDetail(patientId).subscribe(patientDetail => {
    console.log("It works");
    this.patientDetail =  patientDetail.patient as Patient;
    this.patientId = this.patientDetail.Patient_Id as string ;
    console.log(this.patientDetail);
    //this.products = data;
    });
  }

  public writePatient(){
    if(this.isCreate){
      this.createPatient();
    }else{
      this.updatePatient();
    }
  }

  public changeToEditionMode(){
    this.isUpdate = true;
    this.isCreate = false;
    this.isRead = false;
  }

  public createPatient(){
    this.rest.createPatient(this.patientDetail).subscribe(
      patientDetail => {
        console.log("It works");
        this.patientDetail =  patientDetail.patient as Patient;
        console.log(patientDetail);
          // //this.products = data;
          this.router.navigate(['/patient']);
          alert("Patient created successfully");
        });
  }

  public updatePatient(){
    this.rest.updatePatient(this.patientDetail).subscribe(
      patientDetail => {
        console.log(patientDetail);
        this.patientDetail =  patientDetail.patient as Patient;
        console.log(patientDetail);
          // //this.products = data;
          this.router.navigate(['/patient']);
          alert("Patient updated successfully");
        });
  }


  ngOnInit() {
    //this.patientIdd="";
  }



}
