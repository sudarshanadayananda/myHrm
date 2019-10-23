import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    // For testing only, should be removed after implementing TODOs.
    this.router.navigate(['login']);
  }
  /**
   * TODOs:
   * 1. Check whether the token is in local storage.
   * 2. If there is not a token navigate user to login.
   * 3. If there is token but if it is expired navigate user to login.
   * 4. If token is not expired get the logged user from local storage and implement suitable logic
   *    by considering user role.
   **/
}
