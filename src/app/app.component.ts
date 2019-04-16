import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user-model';
import { AuthenticationService } from './authentication.service';



// Components are the most basic building block of a UI in an Angular Application
// An Angular Application is a tree of Angular Components
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    public isAdminUser: boolean = false;
    public currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => {
            this.currentUser = x;
            if(this.currentUser){
                this.isAdminUser = (this.currentUser.usertype == 'admin');
            }else{
                this.isAdminUser = false;
            }
        });
    }

    // logout function which navigates the user back to the login
    // function after logging out
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
