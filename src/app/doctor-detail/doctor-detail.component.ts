// import { Component, OnInit } from '@angular/core';
// import { HealthtrakService } from '../healthtrak.service';
// import { Doctor } from '../model/doctor-model';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-doctor-detail',
//   templateUrl: './doctor-detail.component.html',
//   styleUrls: ['./doctor-detail.component.scss']
// })

// export class DoctorDetailComponent implements OnInit {
//   public isCreate: boolean = false;
//   public isUpdate: boolean = false;
//   public isRead: boolean = false;
//   public doctorId: string;
//   private doctorDetail : Doctor = new Doctor();

//   //private doctorDetail : Doctor = new Doctor();
//   //public doctorIdd : string = "fsfsfsd";

//    constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router) { 
//     this.doctorId=_Activatedroute.snapshot.params['doctorId']; 
//     //this.getDoctorDetail("4386277E");
//    }

//    if(this.doctorId){
//     this.isRead = true;
//     console.log("doctor: " + this.doctorId);
//     console.log(this.doctorId);
//     this.getDoctorDetail(this.doctorId);
//   } else {
//     this.isCreate = true;
//   }
//  }


//     getDoctorDetail(doctorId) {
//     this.rest.getDoctorDetail(doctorId).subscribe(doctorDetail => {
//     console.log("It works");
//     this.doctorDetail =  doctorDetail.doctor as Doctor;
//     this.doctorId = this.doctorDetail.Doctor_Id as string ;
//     console.log(this.doctorDetail);
//     //this.products = data;
//     });
//   //console.log(this.items);
//   }

//     public writeDoctor(){
//       if(this.isCreate){
//         this.createDoctor();
//       }else{
//         this.updateDoctor();
//       }
//     }

//     public changeToEditionMode(){
//       this.isUpdate = true;
//       this.isCreate = false;
//       this.isRead = false;
//     }

//     public createDoctor(){
//       this.rest.createDoctor(this.doctorDetail).subscribe(
//         doctorDetail => {
//           console.log("It works");
//           this.doctorDetail =  doctorDetail.doctor as Doctor;
//           console.log(doctorDetail);
//             // //this.products = data;
//             this.router.navigate(['/doctor']);
//             alert("Doctor created successfully");
//           });
//     }
  
//     public updateDoctor(){
//       this.rest.updateDoctor(this.doctorDetail).subscribe(
//         doctorDetail => {
//           console.log(doctorDetail);
//           this.doctorDetail =  doctorDetail.doctor as Doctor;
//           console.log(doctorDetail);
//             // //this.products = data;
//             this.router.navigate(['/doctor']);
//             alert("Doctor updated successfully");
//           });
//     }

//     ngOnInit() {
    
//     }
  
//   }



    




//   // getDoctorDetail() {
//   //   this.rest.getDoctorDetail(id).subscribe(doctorDetail => {
//   //   console.log("It works");
//   //   this.doctorDetail =  doctorDetail.patient as any;
//   //   console.log(this.doctorDetail);
//   //   //this.products = data;
//   //   });
//   // //console.log(this.items);
//   // }


import { Component, OnInit, Input } from '@angular/core';
import { HealthtrakService } from '../healthtrak.service';
import { Doctor } from '../model/doctor-model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {
  public isCreate: boolean = false;
  public isUpdate: boolean = false;
  public isRead: boolean = false;
  public doctorId: string;
  public readMode: boolean=false;
  private doctorDetail : Doctor = new Doctor();
  // public patientIdd : string = "fsfsfsd";

  constructor(public rest:HealthtrakService, private _Activatedroute:ActivatedRoute, private router: Router) {
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

  
