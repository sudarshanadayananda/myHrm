import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/user/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as ENV } from '../../../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  CMS_API : string;

  constructor(private http: HttpClient) {
    this.CMS_API = ENV.CMS_API;
  }

  //Login
  login(authCredentials){
    return this.http.post(this.CMS_API + 'api/auth/authenticate', authCredentials, httpOptions);
  }

  //functions for reading & deleting JWT tokens from local storage
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  //return information stored in  JWT payload
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
 
  //check whether the user is logged in or not & check for token expiration
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

     // addUser(data: any): Observable<any>{
    //     return this.http.post(this.CMS_API + 'api/user/addUser', data, httpOptions );
   // }

}
