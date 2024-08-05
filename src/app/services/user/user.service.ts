import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UpdateDTO } from "../../auth/DTO/updateDTO";
import { Login } from "../../models/login/Login";
import { User } from "../../models/user/User";

@Injectable({
  providedIn: "root",
})
export class UserService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api/user/";
  _token = localStorage.getItem("token");
  updateDTO!: UpdateDTO;

  constructor() {}

  updateUsername2(updateDTO: UpdateDTO): Observable<string> {
    this._token = localStorage.getItem("token");
    if (this._token != null) {
      updateDTO.token = this._token;
    } else {
      throw "Invalid token";
    }

    return this.http.put<string>(this.API + "update/username/", updateDTO, {
      responseType: "text" as "json",
    });
  }

  updateEmail(updateDTO: UpdateDTO): Observable<string> {
    this._token = localStorage.getItem("token");
    if (this._token != null) {
      updateDTO.token = this._token;
    } else {
      throw "Invalid token";
    }

    return this.http.put<string>(this.API + "update/email/", updateDTO, {
      responseType: "text" as "json",
    });
  }
}
