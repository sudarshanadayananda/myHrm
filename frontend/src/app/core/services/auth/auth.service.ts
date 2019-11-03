import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as ENV } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CMS_API: string;

  constructor(private http: HttpClient) {
    this.CMS_API = ENV.CMS_API;
  }

  /**
   * Backend API call for user login.
   * @param payload{ email: string, password: string} 
   * @returns Observable<any>
   **/
  login(payload: any): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('content-type', 'application/json')
    };
    return this.http.post(this.CMS_API + 'api/auth/authenticate', payload, options);
  }

  //functions for reading & deleting JWT tokens from local storage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  //return information stored in  JWT payload
  getUserPayload(): any {

    const token = this.getToken();

    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  //check whether the user is logged in or not & check for token expiration
  isLoggedIn(): Promise<boolean> {

    return new Promise((resolve) => {

      const userPayload = this.getUserPayload();

      if (userPayload) {
        const isLoggedIn = userPayload.exp > Date.now() / 1000;
        resolve(isLoggedIn);
      } else
        resolve(false)
    });
  }

  /**
   * Save logged user to local storage.
   * @param data: logged user
   **/
  setUserToLocalStorage(data: any): void {
    localStorage.setItem('loggedUser', JSON.stringify(data));
  }
  /**
   * Get logged user from local storage.
   * @returns Promise<loggedUser>
   **/
  getUserFromLocalStorage(): Promise<any> {

    return new Promise((resolve) => {

      const user = JSON.parse(localStorage.getItem('loggedUser'));
      resolve(user);
    });
  }
}
