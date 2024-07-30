import { Component, inject } from '@angular/core';
import { LoginDTO } from '../../../auth/DTO/loginDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../auth/services/login.service';
import { Router } from '@angular/router';
import {Login} from "../../../models/login/Login";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _loginService: LoginService, private _router: Router) {
    this._loginService.removeToken();
  }

  loginForm: Login = new Login();

  login(){
    this._loginService.login(this.loginForm).subscribe({
        next: (token: String) => {
            if (token) {
                this._loginService.addToken(token.toString());
              this._router.navigate(['/user/dashboard']);
            }
        },
        error: err =>{
          this.invalid();
        }
    })
  }

  invalid(){

  }

}
