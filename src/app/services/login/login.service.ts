import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../models/login/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/user/"

  constructor() { }

  logar(user: Login): Observable<string> {
    return this.http.post<string>(this.API, user, {responseType: 'text' as 'json'});
  }

}
