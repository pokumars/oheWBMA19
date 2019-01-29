import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pic } from '../../interfaces/pic';


@Injectable()
export class MediaProvider {

  baseUrl ='http://media.mw.metropolia.fi/wbma/';

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  getSingleMedia(id: number) {
    return this.http.get<Pic>('http://media.mw.metropolia.fi/wbma/media/' + id);
  }


  getAllmedia() {
    return this.http.get<Pic[]>('http://media.mw.metropolia.fi/wbma/media/');
  }

  login(username: string, password: string) {
    const body = {
      'username': username,
      'password': password
    };

    console.log('received in media.ts for ' + username);

    return this.http.post(this.baseUrl + 'login', body);
  }
  checkUserExists(username: string) {
    return this.http.get(this.baseUrl + '/users/username/:' + username);

  }

  register(username: string, password: string) {

  }

}
