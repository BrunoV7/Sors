import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cartoes } from "../../models/cartoes/cartoes";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  API = "http://localhost:8080/api/cartoes";

  constructor(private http: HttpClient) {}

  findAll(): Observable<Cartoes[]> {
    return this.http.get<Cartoes[]>(this.API + "/findall");
  }

  findById(id: number): Observable<Cartoes> {
    return this.http.get<Cartoes>(this.API + "/findbyid/" + id);
  }
}
