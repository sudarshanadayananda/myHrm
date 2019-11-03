import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router,
    private authService: AuthService) {

    this.loginForm = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  ngOnInit() { }

  onSubmit(): void {

    const payload = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.authService.login(payload)
      .subscribe((res: any) => {

        this.authService.setToken(res['token']);
        this.authService.setUserToLocalStorage(res['data']);

        if (res['data'].role == 'ADMIN_USER')
          this.router.navigate(['/admin']);
        else
          this.router.navigate(['/appuser']);
      }, (err: HttpErrorResponse) => {

        this.errorMessage = err.error.message;
      });
  }

}
