import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  private appointments : any[];
  public patientId : string;

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router) {
      this.patientId=_Activatedroute.snapshot.params['patientId'];
      this.getAppointments();

  }

  getAppointments() {
    this.rest.getAppointments(this.patientId).subscribe(appointments => {
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
