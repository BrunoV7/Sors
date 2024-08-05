import {
  Component,
  ElementRef,
  inject,
  ViewChild,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../../../../models/user/User";
import { LoginService } from "../../../../../auth/services/login.service";
import { UserService } from "../../../../../services/user/user.service";
import { FormsModule } from "@angular/forms";
import { UpdateDTO } from "../../../../../auth/DTO/updateDTO";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  private authServices = inject(LoginService);
  private userService = inject(UserService);

  updateDTO: UpdateDTO = {
    token: "",
    nome: "",
    password: "",
    email: "",
  };

  loadedUser: User = new User();
  UpdateUsername: string = "";
  token!: string;
  user: User = new User();
  newUser: User = new User();
  btn_user: boolean = true;
  btn_email: boolean = true;
  UpdateEmail!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.loadUser();
  }

  ngOnInit(): void {
    this.checkStatus();
    this.loadUser();
  }

  loadUser() {
    this.updateDTO = {
      token: "",
      nome: "",
      password: "",
      email: "",
    };
    this.loadedUser = this.authServices.isLogged();
    if (this.loadedUser && this.loadedUser.id) {
      this.authServices.findbyid(this.loadedUser.id).subscribe({
        next: (data) => {
          this.user = data as User;
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      console.error("User is not logged in or ID is missing");
    }
  }

  toggleUser() {
    this.btn_user = !this.btn_user;
  }

  toggleEmail() {
    this.btn_email = !this.btn_email;
  }

  updateUsername() {
    this.updateDTO.nome = this.UpdateUsername;
    if (this.updateDTO.nome.trim()) {
      this.userService.updateUsername2(this.updateDTO).subscribe({
        next: (data) => {
          this.loadUser();
          this.toggleUser();
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      console.error("Username is empty");
    }
  }

  updateEmail() {
    this.updateDTO.email = this.UpdateEmail;
    if (this.updateDTO.email.trim()) {
      this.userService.updateEmail(this.updateDTO).subscribe({
        next: (data) => {
          this.loadUser();
          this.toggleUser();
          this._router.navigate(["/login"]);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      console.error("Username is empty");
    }
  }

  checkStatus() {
    this.authServices.findbyid(this.loadedUser.id).subscribe({
      next: (data) => {
        this.newUser = data as User;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
