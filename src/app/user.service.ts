import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './model/user-model';

// The @Injectable decorator marks it as a service that can be injected
// But an Angular dependency injector must be configured with a provider of that service
// In this case 'root' is where the service is provided
@Injectable({ providedIn: 'root' })
export class UserService {
    public apiUrl: string = 'http://localhost:4200';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.apiUrl+'/users');
    }

    getById(id: number) {
        return this.http.get(this.apiUrl+'/users/${id}');
    }

    register(user: User) {
        return this.http.post(this.apiUrl+'/users/register', user);
    }

    update(user: User) {
        return this.http.put(this.apiUrl+'/users/${user.id}', user);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl+'/users/${id}');
    }
}
