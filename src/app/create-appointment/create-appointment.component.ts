import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  private appointments : any[];

  constructor(public rest:HealthtrakService) {
    // this.createAppointment();
   }

  //  createAppointment() {
  //   this.rest.createAppointment().subscribe(appointments => {
  //   console.log("It works");
  //   this.appointments =  appointments.appointment as any[];
  //   console.log(this.appointments);
  //   //this.products = data;
  //   });
  // //console.log(this.items);
  // }

  ngOnInit() {
  }

}
