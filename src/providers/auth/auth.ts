import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {
  baseUrl = 'https://media.mw.metropolia.fi/wbma/';

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  // object that goes with login attempt
  login(username: string, password: string) {
    const body = {
      'username': username,
      'password': password
    };
    return this.http.post(this.baseUrl + 'login', body);
  }

  register(username: string, password: string, email: string) {
    const body = {
      'username': username,
      'password': password,
      'email': email
    };
    return this.http.post(this.baseUrl + 'users', body);
  }

  checkUserExists(username: string) {
    return this.http.get(this.baseUrl + 'users/username/' + username);
  }

}
