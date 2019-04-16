import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Appointment } from '../model/appointment-model';
import { ActivatedRoute, Router } from '@angular/router';

// Components are the most basic building block of a UI in an Angular Application
// An Angular Application is a tree of Angular Components
@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})

// OnInIt is a lifecycle hook which gets called after the constructor is
// called and all the variables have been initialised
// Components must implement OnInIt in order to use it
export class AppointmentDetailComponent implements OnInit {
  public isCreate: boolean = false;
  //public isUpdate: boolean = false;
  public isRead: boolean = false;
  public appointmentId: number;
  //public readMode: boolean=false;
  private appointmentDetail : Appointment = new Appointment();

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router) {
    this.appointmentId=_Activatedroute.snapshot.params['appointmentId'];
    //this.readMode=_Activatedroute.snapshot.params['readMode'];

    if(this.appointmentId){
      this.isRead = true;
      console.log("appointment: "+this.appointmentId);
      console.log(this.appointmentId);
      this.getAppointmentDetail(this.appointmentId);
    }else{
      this.isCreate = true;
    }
   }

   // get details of an appointment
   getAppointmentDetail(appointmentId) {
    this.rest.getAppointmentDetail(appointmentId).subscribe(appointmentDetail => {
    console.log("It works");
    this.appointmentDetail =  appointmentDetail.appointment as Appointment;
    this.appointmentId = this.appointmentDetail.Appointment_Id as number ;
    console.log(this.appointmentDetail);
    });
  }

  // write Appointment mode needed in order to use the create appointment function
  // public writeAppointment(){
  //   if(this.isCreate){
  //     this.createAppointment();
  //   }else{
  //     //this.updateAppointment();
  //   }
  // }

  // change to edit mode in order to create a new appointment
  // public changeToEditMode(){
  //   //this.isUpdate = true;
  //   this.isCreate = false;
  //   this.isRead = false;
  // }

  // create an appointment
  public createAppointment(){
    this.rest.createAppointment(this.appointmentDetail).subscribe(
      appointmentDetail => {
        console.log("It works");
        this.appointmentDetail =  appointmentDetail.appointment as Appointment;
        console.log(appointmentDetail);
          this.router.navigate(['/appointment']);
          alert("Appointment created successfully");
        });
  }

  // this method is not required in this iteration
  // public updateAppointment(){
  //   this.rest.updateAppointment(this.appointmentDetail).subscribe(
  //     patientDetail => {
  //       console.log(appointmentDetail);
  //       this.appointmentDetail =  appointmentDetail.appointment as Appointment;
  //       console.log(appointmentDetail);
  //         this.router.navigate(['/appointment']);
  //         alert("Appointment updated successfully");
  //       });
  // }


  ngOnInit() {

  }



}
