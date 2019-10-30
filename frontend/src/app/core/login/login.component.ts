import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {
    email: '',
    password: ''
  };
  
  // email validation
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;

  constructor(private userService: UserService, private authService: AuthService ,private router: Router) { }

  ngOnInit() {
    // if(this.authService.isLoggedIn())
    // this.router.navigate(['/admin']);
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.authService.setToken(res['token']);
        if (res['data'].role == 'ADMIN_USER')
        this.router.navigate(['/admin']);
        else
        this.router.navigate(['/user']);
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    );
  }

}
