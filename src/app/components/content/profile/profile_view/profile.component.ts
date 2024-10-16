import { Component, inject } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { LoginService } from "../../../../auth/services/login.service";
import { User } from "../../../../models/user/User";
import { Observable } from "rxjs";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
  loadUSer: User = new User();
  user: User = new User();

  authServices = inject(LoginService);

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.loadUser();
  }

  loadUser() {
    this.loadUSer = this.authServices.isLogged();
    this.authServices.findbyid(this.loadUSer.id).subscribe({
      next: (data) => {
        this.user = data as User;
      },
    });
  }

  navigate() {
    this._router.navigate([
      "/user/profile",
      { outlets: { profile: "config" } },
    ]);
  }

  ngOnInit() {
    this.navigate();
  }
}
