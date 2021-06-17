import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Account} from '../models/Account';
import {Credentials} from '../models/Credentials';
import {Router} from '@angular/router';
import {KwetterToken} from '../models/KwetterToken';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  register(username: string, password: string): Observable<boolean> {
    let requestBody: Credentials = {
      username: username,
      password: password
    }
    return this.httpClient.post<boolean>(environment.api + '/auth/register', requestBody);
  }

  login(username: string, password: string): Observable<KwetterToken> {
    let requestBody: Credentials = {
      username: username,
      password: password
    }

    // return this.httpClient.post(environment.api + '/auth/login', requestBody, {responseType: 'text'})
    return this.httpClient.post<KwetterToken>(environment.api + '/auth/login', requestBody)
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserId(){
    return Number(localStorage.getItem('userId'))
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

  }
}
