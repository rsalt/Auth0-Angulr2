import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;



@Injectable()//decorator
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('C5r0BeFim7qyo9Hr6ByfSqFWaarTkaIO', 'a2product.auth0.com', {});
  userProfile: Object;

  constructor() { 
      // Set userProfile attribute of already saved profile
      this.userProfile = JSON.parse(localStorage.getItem('profile'));

      // Add callback for lock `authenticated` event
     this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));

        this.userProfile = profile;
        console.log(this.userProfile);
      });
      // Fetch profile information
    });
  }
  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }


  public authenticated(){
      return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');

    this.userProfile = undefined;
  }

}
