import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api/user/";

  constructor() {}

  updateUsername(token: string, username: string): Observable<string> {
    return this.http.put<string>(
      `${this.API}update/username/`,
      { token, username },
      {
        responseType: "text" as "json",
      },
    );
  }
}
