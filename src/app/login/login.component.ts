import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { getMaxListeners } from 'cluster';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  doctorEmail:string="doctor@gmail.com";
  doctorPassword:string="12345";
  patientEmail:string="patient@gmail.com";
  patientPassword:string="12345";
  user:string="";
  password:string="";

  constructor() { }



  ngOnInit() {
  }
  myFunc(){
    console.log("function called");
}

signIn(){
  //if doctor
}

}
