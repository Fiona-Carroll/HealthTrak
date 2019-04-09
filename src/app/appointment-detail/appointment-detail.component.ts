import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Appointment } from '../model/appointment-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']

})


export class AppointmentDetailComponent implements OnInit {

  private appointmentDetail : Appointment = new Appointment();

  constructor(public rest:HealthtrakService, private router: Router) {
    this.getAppointmentDetail(1);
    //this.createAppointment();
   }

   getAppointmentDetail(appointmentId) {
    this.rest.getAppointmentDetail(appointmentId).subscribe(appointmentDetail => {
    console.log("It works");
    this.appointmentDetail =  appointmentDetail.appointment as Appointment;
    console.log(this.appointmentDetail);
    //this.products = data;
    });
  //console.log(this.items);
  }

  public createAppointment(){
    this.rest.createAppointment(this.appointmentDetail).subscribe(
      appointmentDetail => {
        console.log("It works");
        this.appointmentDetail =  appointmentDetail.appointment as Appointment;
        console.log(appointmentDetail);
        this.router.navigate(['/appointment']);
        alert("Appointment created successfully");
        // //this.products = data;
        });
  }

  ngOnInit() {
  }

}
