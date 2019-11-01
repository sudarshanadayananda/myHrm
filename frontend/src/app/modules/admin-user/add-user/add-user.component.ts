import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../core/services/user/user.service';
import { AuthService } from '../../../core/services/auth/auth.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  role: string;

   options = [
    { name: "ADMIN_USER", value: 1 },
    { name: "APP_USER", value: 2 }
   ];

   AddUserForm = new FormGroup({
     name: new FormControl(''),
     email: new FormControl(''),
     password:new FormControl(''),
     role:new FormControl(''),
   });

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
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
