import { Component } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eshop';
  user: any;
  loggedIn: any;

  constructor() { }

 
}
