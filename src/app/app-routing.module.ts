
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'appointment/:patientId', component: AppointmentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient/:doctorId', component: PatientComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'patient-detail/:patientId', component: PatientDetailComponent },
  { path: 'patient-detail', component: PatientDetailComponent },
  { path: 'doctor-detail/:doctorId', component: DoctorDetailComponent },
  { path: 'doctor-detail/:doctorId/:readMode', component: DoctorDetailComponent },
  { path: 'doctor-detail', component: DoctorDetailComponent },
  { path: 'appointment-detail', component: AppointmentDetailComponent },
  { path: 'appointment-detail/:appointmentId', component: AppointmentDetailComponent },
  { path: 'appointment-detail/:appointmentId/:readMode', component: AppointmentDetailComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
