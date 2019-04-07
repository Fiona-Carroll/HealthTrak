import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  private appointments : any[];

  constructor(public rest:HealthtrakService) { 
        this.getAppointments();

  }

  getAppointments() {
    this.rest.getAppointments().subscribe(appointments => {
    console.log("It works");
    this.appointments =  appointments.appointment as any[];
    console.log(this.appointments);
    //this.products = data;
    });
  //console.log(this.items);
  }


  ngOnInit() {
  }

}
