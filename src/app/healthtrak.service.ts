import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Appointment } from './model/appointment-model';


@Injectable({
  providedIn: 'root'
})
export class HealthtrakService {
  readonly endpoint = 'http://localhost:5000';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

//   getPatients(): Observable<any> {
//   console.log(this.endpoint + '/patient/get');
//   return this.http.get(this.endpoint + '/patient/get').pipe(
//     map(this.extractData),
//     catchError(err => {
//       console.log("error:"+err.message);
//       return new Observable;
//     })
//     );
// }

getAppointments(patientId): Observable<any> {
  let patientFilter = patientId ? "?patientId="+ patientId : "";
  console.log("patientFilter: "+patientFilter);
  console.log("patientId: "+patientId);

  let params = new HttpParams();
  if(patientId){
    params = params.append('patientId', patientId);
  }



  console.log(this.endpoint + '/appointment/get');
  return this.http.get(this.endpoint + '/appointment/get',{params: params}).pipe(
    map(this.extractData),
    catchError(err => {
      console.log("error:"+err.message);
      return new Observable;
    })
    );
}

getPatients(doctorId): Observable<any> {
  let doctorFilter = doctorId ? "?doctorId"+ doctorId : "";
  console.log("patientFilter: "+doctorFilter)
  console.log("doctorId: "+doctorId);

  let params = new HttpParams();
  if(doctorId){
    params = params.append('doctorId', doctorId);
  }
  console.log(this.endpoint + '/patient/get');
  return this.http.get(this.endpoint + '/patient/get',{params: params}).pipe(
    map(this.extractData),
    catchError(err => {
      console.log("error:"+err.message);
      return new Observable;
    })
    );
}
  
getDoctors(): Observable<any> {
  console.log(this.endpoint + '/doctor/get');
  return this.http.get(this.endpoint + '/doctor/get').pipe(
    map(this.extractData),
    catchError(err => {
      console.log("error:"+err.message);
      return new Observable;
    })
    );
}

getPatientDetail(id): Observable<any> {
  return this.http.get(this.endpoint + '/patient/detail/' + id).pipe(
    map(this.extractData));
}

getAppointmentDetail(id): Observable<any> {
  return this.http.get(this.endpoint + '/appointment/detail/' + id).pipe(
    map(this.extractData),
    catchError(err => {
      console.log("error:"+err.message);
      return new Observable;
    }));
}

getDoctorDetail(id): Observable<any> {
  return this.http.get(this.endpoint + '/doctor/detail/' + id).pipe(
    map(this.extractData));
}

createPatient(patient): Observable<any> {
  console.log(patient);
  return this.http.post<any>(this.endpoint + '/patient/create', JSON.stringify(patient), this.httpOptions).pipe(
    tap((patient) => console.log(`added patient with id=${patient.Patient_Id}`)),
    catchError(this.handleError<any>('createPatient'))
  );
}

createAppointment(appointment:Appointment): Observable<any> {
  console.log(appointment);
  return this.http.post<any>(this.endpoint + '/appointment/create', JSON.stringify(appointment), this.httpOptions).pipe(
    tap((appointment) => console.log(`added appointment with id=${appointment.Appointment_Id}`)),
    catchError(this.handleError<any>('createAppointment'))
  );
}

createDoctor(doctor): Observable<any> {
  console.log(doctor);
  return this.http.post<any>(this.endpoint + '/doctor/create', JSON.stringify(doctor), this.httpOptions).pipe(
    tap((doctor) => console.log(`added doctor with id=${doctor.Doctor_Id}`)),
    catchError(this.handleError<any>('createDoctor'))
  );
}

updatePatient (patient): Observable<any> {
  return this.http.put(this.endpoint + '/patient/update', JSON.stringify(patient), this.httpOptions).pipe(
    tap(_ => console.log('updated patient')),
    catchError(this.handleError<any>('updatePatient'))
  );
}

updateDoctor (doctor): Observable<any> {
  return this.http.put(this.endpoint + '/doctor/update', JSON.stringify(doctor), this.httpOptions).pipe(
    tap(_ => console.log('updated doctor')),
    catchError(this.handleError<any>('updateDoctor'))
  );
}

deletePatient (id): Observable<any> {
  return this.http.delete<any>(this.endpoint + 'delete?id=' + id, this.httpOptions).pipe(
    tap(_ => console.log(`deleted patient id=${id}`)),
    catchError(this.handleError<any>('deletePatient'))
  );
}

deleteDoctor (id): Observable<any> {
  return this.http.delete<any>(this.endpoint + 'delete?id=' + id, this.httpOptions).pipe(
    tap(_ => console.log(`deleted doctor id=${id}`)),
    catchError(this.handleError<any>('deleteDoctor'))
  );
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
