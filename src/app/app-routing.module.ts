import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TransferComponent } from './transfer/transfer.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'appointment/:patientId', component: AppointmentComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'patient-detail/:patientId', component: PatientDetailComponent },
  { path: 'patient-detail', component: PatientDetailComponent },
  { path: 'doctor-detail', component: DoctorDetailComponent },
  { path: 'appointment-detail', component: AppointmentDetailComponent },
  { path: 'create-patient', component: CreatePatientComponent },
  { path: 'create-doctor', component: CreateDoctorComponent },
  { path: 'create-appointment', component: CreateAppointmentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
