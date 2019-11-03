import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as ENV } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  CMS_API: string;

  constructor(private http: HttpClient) {
    this.CMS_API = ENV.CMS_API;
  }

  //add new user
  addUser(data: any): Observable<any> {
    return this.http.post(this.CMS_API + 'api/user/addUser', data, httpOptions);
  }

}
