import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { TransferComponent } from './transfer/transfer.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppointmentComponent,
    ProfileComponent,
    TransferComponent,
    RegisterComponent,
    DoctorComponent,
    PatientComponent,
    AdminComponent,
    PatientDetailComponent,
    DoctorDetailComponent,
    AppointmentDetailComponent,
    CreatePatientComponent,
    CreateDoctorComponent,
    CreateAppointmentComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    MDBBootstrapModule.forRoot()
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
