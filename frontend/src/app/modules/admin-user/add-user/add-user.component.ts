import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../../core/services/user/user.service';
import { AuthService } from '../../../core/services/auth/auth.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  name: string;
  email: string;
  password: string;
  role: string;

  //  options = [
  //   { name: "ADMIN_USER", value: 1 },
  //   { name: "APP_USER", value: 2 }
  //  ];

  options = ['ADMIN_USER', 'APP_USER'];

  
  //  this.loginForm = new FormGroup({
  //   email: new FormControl(null, { validators: [Validators.required] }),
  //   password: new FormControl(null, { validators: [Validators.required] }),
  // });
  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
   this.addUserForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
    });
   }

  ngOnInit() {
    // this.AddUserForm = this.formBuilder.group({
    //   role: ['ADMIN_USER']
    // });
  }

  addUser(AddUserForm): void {
    this.userService.addUser(AddUserForm.value).subscribe(res => {
      console.log(res);
    });

  }


  onLogout() : void{
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }

}
