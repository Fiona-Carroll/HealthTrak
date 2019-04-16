import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../model/appointment-model';
import { AuthenticationService } from '../authentication.service';
import { User } from '../model/user-model';

// Components are the most basic building block of a UI in an Angular Application
// An Angular Application is a tree of Angular Components
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})

// OnInIt is a lifecycle hook which gets called after the constructor is
// called and all the variables have been initialised
// Components must implement OnInIt in order to use it
export class AppointmentComponent implements OnInit {

  private appointments : any[];
  public patientId : string;
  public appointmentId : number;
  private appointmentDetail : Appointment = new Appointment();
  public isPatientUser: boolean = false;
  public currentUser: User;

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService
    ) {
      this.patientId=_Activatedroute.snapshot.params['patientId'];
      this.appointmentId=_Activatedroute.snapshot.params['appointmentId'];
      this.getAppointments();
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

  // get a list of all appointments
  getAppointments() {
    this.rest.getAppointments(this.patientId).subscribe(appointments => {
    console.log("It works");
    this.appointments =  appointments.appointment as any[];
    console.log(this.appointments);
    });

  }

  // get details of an appointment
  getAppointmentDetail(appointmentId) {
   this.rest.getAppointmentDetail(appointmentId).subscribe(appointmentDetail => {
   console.log("It works");
   this.appointmentDetail =  appointmentDetail.appointment as Appointment;
   this.appointmentId = this.appointmentDetail.Appointment_Id as number;
   console.log(this.appointmentDetail);
   });
 }


  ngOnInit() {
  }

}
