import { Component, OnInit, Input } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Doctor } from '../model/doctor-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../model/user-model';

// Components are the most basic building block of a UI in an Angular Application
// An Angular Application is a tree of Angular Components
@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})

// OnInIt is a lifecycle hook which gets called after the constructor is
// called and all the variables have been initialised
// Components must implement OnInIt in order to use it
export class DoctorDetailComponent implements OnInit {
  public isCreate: boolean = false;
  public isUpdate: boolean = false;
  public isRead: boolean = false;
  public doctorId: string;
  public readMode: boolean=false;
  private doctorDetail : Doctor = new Doctor();
  public isPatientUser: boolean = false;
  public isDoctorUser: boolean = false;
  public currentUser: User;

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService
    ) {
    this.doctorId=_Activatedroute.snapshot.params['doctorId'];
    this.readMode=_Activatedroute.snapshot.params['readMode'];

    if(this.doctorId){
      this.isRead = true;
      console.log("patient: "+this.doctorId);
      console.log(this.doctorId);
      this.getDoctorDetail(this.doctorId);
    }else{
      this.isCreate = true;
    }
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      if(this.currentUser){
          this.isPatientUser = (this.currentUser.usertype != 'patient');
          this.isDoctorUser = (this.currentUser.usertype != 'doctor');
          console.log('executes if'+ this.isPatientUser);
      }else{
          this.isPatientUser = false;
          this.isDoctorUser = false;
          console.log('executes else'+ this.isPatientUser);

      }
  });
   }

   getDoctorDetail(doctorId) {
    this.rest.getDoctorDetail(doctorId).subscribe(doctorDetail => {
    console.log("It works");
    this.doctorDetail =  doctorDetail.doctor as Doctor;
    this.doctorId = this.doctorDetail.Doctor_Id as string ;
    console.log(this.doctorDetail);
    //this.products = data;
    });
  }

  public writeDoctor(){
    if(this.isCreate){
      this.createDoctor();
    }else{
      this.updateDoctor();
    }
  }

  public changeToEditMode(){
    this.isUpdate = true;
    this.isCreate = false;
    this.isRead = false;
  }

  public createDoctor(){
    this.rest.createDoctor(this.doctorDetail).subscribe(
      doctorDetail => {
        console.log("It works");
        this.doctorDetail =  doctorDetail.doctor as Doctor;
        console.log(doctorDetail);
          this.router.navigate(['/doctor']);
          alert("Doctor created successfully");
        });
  }

  public updateDoctor(){
    this.rest.updateDoctor(this.doctorDetail).subscribe(
      doctorDetail => {
        console.log(doctorDetail);
        this.doctorDetail =  doctorDetail.doctor as Doctor;
        console.log(doctorDetail);
          this.router.navigate(['/doctor']);
          alert("Doctor updated successfully");
        });
  }




  ngOnInit() {

  }



}
