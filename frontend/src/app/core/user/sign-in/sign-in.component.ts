import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  model = {
    email: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/admin');
      });
  }

}
