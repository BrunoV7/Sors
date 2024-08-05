import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpInterceptorFn,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { LoginService } from "../services/login.service";

export const _httpInterceptor: HttpInterceptorFn = (request, next) => {
  let authServices = inject(LoginService);
  let router = inject(Router);
  let token = localStorage.getItem("token");
  let SubToken!: string;

  if (token && !router.url.includes("/login")) {
    SubToken = token.toString();
    SubToken.replace('{"token":"', "");
    SubToken.replace('"}', "");
    request = request.clone({
      setHeaders: { Authorization: "Bearer " + SubToken },
    });
  }

  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          router.navigateByUrl("/login");
        } else if (err.status === 403) {
          router.navigateByUrl("/whereami");
        } else if (err.status === 404) {
          router.navigateByUrl("/notfound");
        } else {
          router.navigateByUrl("/login");
        }
      }
      return throwError(() => err);
    }),
  );
};
