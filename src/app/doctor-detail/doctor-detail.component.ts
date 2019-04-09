import { Component, OnInit } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Doctor } from '../model/doctor-model';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {

  private doctorDetail : Doctor = new Doctor();
  public doctorIdd : string = "fsfsfsd";

   constructor(public rest:HealthtrakService) { 
     this.getDoctorDetail("4386277E");
   }

    getDoctorDetail(doctorId) {
    this.rest.getDoctorDetail(doctorId).subscribe(doctorDetail => {
    console.log("It works");
    this.doctorDetail =  doctorDetail.doctor as Doctor;
    this.doctorIdd = this.doctorDetail.Doctor_Id as string ;
    console.log(this.doctorDetail);
    //this.products = data;
    });
  //console.log(this.items);
  }

  // getDoctorDetail() {
  //   this.rest.getDoctorDetail(id).subscribe(doctorDetail => {
  //   console.log("It works");
  //   this.doctorDetail =  doctorDetail.patient as any;
  //   console.log(this.doctorDetail);
  //   //this.products = data;
  //   });
  // //console.log(this.items);
  // }

  ngOnInit() {
  }

}
