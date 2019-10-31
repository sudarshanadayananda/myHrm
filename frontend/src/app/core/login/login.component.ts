import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { AuthService } from '../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

 
  serverErrorMessage: string;

  constructor(private userService: UserService, private authService: AuthService ,private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn())
    this.router.navigate(['/admin']);
  }

  onSubmit(loginForm){
    this.userService.login(loginForm.value).subscribe(
      res => {
        this.authService.setToken(res['token']);
        if (res['data'].role == 'ADMIN_USER')
        this.router.navigate(['/admin']);
        else
        this.router.navigate(['/appuser']);
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    );
  }

}
