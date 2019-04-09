import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Doctor } from '../model/doctor-model';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.scss']
})
export class CreateDoctorComponent implements OnInit {

  private doctorDetail : Doctor = new Doctor();

   constructor(public rest:HealthtrakService) { 
     this.createDoctor();
   }

   public createDoctor(){
    this.rest.createDoctor(this.doctorDetail).subscribe(
      doctorDetail => {
        console.log("It works");
        // this.appointmentDetail =  appointmentDetail.appointment as Appointment;
        console.log(doctorDetail);
        // //this.products = data;
        });
  }

  // createDoctor() {
  //   this.rest.createDoctor().subscribe(doctors => {
  //   console.log("It works");
  //   this.doctors =  doctors.patient as any[];
  //   console.log(this.doctors);
  //   //this.products = data;
  //   });
  // //console.log(this.items);
  // }

  ngOnInit() {
  }

}
