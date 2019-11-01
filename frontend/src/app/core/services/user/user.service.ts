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

  //add new user
  addUser(data: any): Observable<any> {
    return this.http.post(this.CMS_API + 'api/user/addUser', data, httpOptions);
  }

}
