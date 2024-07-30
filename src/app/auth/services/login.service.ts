import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroments";
import {LoginDTO} from "../DTO/loginDTO";
import {Observable} from "rxjs";
import {Register} from "../DTO/register";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {User} from "../../models/user/User";
import {Login} from "../../models/login/Login";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    http = inject(HttpClient);
    API2: string = "http://localhost:8080/auth"
    API = environment + "/auth";

    USER: string = "http://localhost:8080/api/user"

    constructor() { }

    login(user: Login): Observable<String> {
        console.log(user);
        return this.http.post<string>(this.API2 + "/login", user, {responseType: 'text' as 'json'});
    }

    register(user: Register): Observable<String> {
        return this.http.post<string>(this.API + "/register", user, {responseType: 'text' as 'json'});
    }

    findbyid(id: number): Observable<User> {
        return this.http.get<User>(this.USER + "/findbyid/" + id);
    }

    addToken(token: string){
        localStorage.setItem('token', token);
    }

    removeToken(){
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
    }

    getToken(){
        return localStorage.getItem('token');
    }

    Decode(){
        let token = this.getToken();
        if (token) {
            return jwtDecode<JwtPayload>(token);
        }
        return "";
    }

    hasPermission(role: string){
        let user = this.Decode() as User;
        if (user.role == role)
            return true;
        else
            return false;
    }

    isLogged(){
        let userToken = this.Decode() as User;
        localStorage.setItem("id", userToken.id.toString());
        localStorage.setItem("email", userToken.email);
        console.log(userToken);
        return userToken;
    }

    _replace(token: string){
        console.log(token);
        token.replace('{"token":"', '');
        token.replace('"}', '');
        console.log(token);
        return token;
    }

}