import { Component, inject } from '@angular/core';
import { Login } from '../../../models/login/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login: Login = new Login();

  loginService = inject(LoginService);
  router = inject(Router);

  constructor(){
  }

  logar(){
    this.loginService.logar(this.login).subscribe({
      next: retorno => {
        this.router.navigate(['user/dashboard']);
      },
      error: erro => {
        this.falhou();
      }
    });
  }

  falhou(){

  }
}
