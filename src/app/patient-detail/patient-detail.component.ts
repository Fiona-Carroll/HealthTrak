import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Patient } from '../model/patient-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../model/user-model';


// Components are the most basic building block of a UI in an Angular Application
// An Angular Application is a tree of Angular Components
@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})

// OnInIt is a lifecycle hook which gets called after the constructor is
// called and all the variables have been initialised
// Components must implement OnInIt in order to use it
export class PatientDetailComponent implements OnInit {
  public isCreate: boolean = false;
  public isUpdate: boolean = false;
  public isRead: boolean = false;
  public patientId: string;
  private patientDetail : Patient = new Patient();
  public isPatientUser: boolean = false;
  public currentUser: User;

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService
    ) {
    this.patientId=_Activatedroute.snapshot.params['patientId'];

    if(this.patientId){
      this.isRead = true;
      console.log("patient: "+this.patientId);
      console.log(this.patientId);
      this.getPatientDetail(this.patientId);
    }else{
      this.isCreate = true;
    }
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      if(this.currentUser){
          this.isPatientUser = (this.currentUser.usertype != 'patient');
          console.log('executes if'+ this.isPatientUser);
      }else{
          this.isPatientUser = false;
          console.log('executes else'+ this.isPatientUser);

      }
  });
   }

   getPatientDetail(patientId) {
    this.rest.getPatientDetail(patientId).subscribe(patientDetail => {
    console.log("It works");
    this.patientDetail =  patientDetail.patient as Patient;
    this.patientId = this.patientDetail.Patient_Id as string ;
    console.log(this.patientDetail);

    });
  }

  public writePatient(){
    if(this.isCreate){
      this.createPatient();
    }else{
      this.updatePatient();
    }
  }

  public changeToEditMode(){
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
          this.router.navigate(['/patient']);
          alert("Patient updated successfully");
        });
  }


  ngOnInit() {

  }



}
