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

  updateDTO!: UpdateDTO;
  loadedUser: User = new User();
  UpdateUsername: string = "";
  token!: string;
  user: User = new User();
  newUser: User = new User();
  updateUser: boolean = true;

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
    this.loadedUser = this.authServices.isLogged();
    if (this.loadedUser && this.loadedUser.id) {
      this.authServices.findbyid(this.loadedUser.id).subscribe({
        next: (data) => {
          this.user = data as User;
          console.log(this.user);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      console.error("User is not logged in or ID is missing");
    }
  }

  toggle() {
    this.updateUser = !this.updateUser;
  }

  updateUsername() {
    console.log(this.UpdateUsername);
    if (this.UpdateUsername.trim()) {
      this.userService
        .updateUsername(this.token, this.updateDTO.nome)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.loadUser();
            this.toggle();
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
        console.log(this.newUser);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
