import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../models/login/Login';
import {User} from "../../models/user/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/user/"

  constructor() { }

  logar(user: Login): Observable<User> {
    return this.http.post<User>(this.API + "logar", user, {responseType: 'text' as 'json'});
  }

}
