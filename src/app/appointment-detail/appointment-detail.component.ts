import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Appointment } from '../model/appointment-model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})
export class AppointmentDetailComponent implements OnInit {
  public isCreate: boolean = false;
  //public isUpdate: boolean = false;
  public isRead: boolean = false;
  public appointmentId: number;
  public readMode: boolean=false;
  private appointmentDetail : Appointment = new Appointment();

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router) {
    this.appointmentId=_Activatedroute.snapshot.params['appointmentId'];
    this.appointmentId=_Activatedroute.snapshot.params['readMode'];

    if(this.appointmentId){
      this.isRead = true;
      console.log("appointment: "+this.appointmentId);
      console.log(this.appointmentId);
      this.getAppointmentDetail(this.appointmentId);
    }else{
      this.isCreate = true;
    }
   }

   getAppointmentDetail(appointmentId) {
    this.rest.getAppointmentDetail(appointmentId).subscribe(appointmentDetail => {
    console.log("It works");
    this.appointmentDetail =  appointmentDetail.appointment as Appointment;
    this.appointmentId = this.appointmentDetail.Appointment_Id as number ;
    console.log(this.appointmentDetail);
    });
  }

  public writeAppointment(){
    if(this.isCreate){
      this.createAppointment();
    }else{
      //this.updateAppointment();
    }
  }

  public changeToEditMode(){
    //this.isUpdate = true;
    this.isCreate = false;
    this.isRead = false;
  }

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

