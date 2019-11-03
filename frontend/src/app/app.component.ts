import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './core/services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
    private authService: AuthService) {

    this.authService.isLoggedIn()
      .then((isLoggedIn: boolean) => {

        if (isLoggedIn) {
          this.authService.getUserFromLocalStorage()
            .then((user: any) => {

              if (user) {
                if (user.role === 'ADMIN_USER')
                  this.router.navigate(['admin']);
                else
                  this.router.navigate(['appuser']);
              } else
                this.router.navigate(['login']);
            });
        } else
          this.router.navigate(['login']);
      });
  }
}
