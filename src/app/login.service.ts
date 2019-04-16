import { Injectable } from '@angular/core';

// The @Injectable decorator marks it as a service that can be injected
// But an Angular dependency injector must be configured with a provider of that service
// In this case 'root' is where the service is provided
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
}
