import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    img{
        width: 100%;
    }
  `]
})
export class ProfileComponent {
  userProfile: any;
  constructor(private auth: AuthService) { 
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.userProfile);
  }
}
