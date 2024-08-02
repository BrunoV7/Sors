import {HttpErrorResponse, HttpInterceptor, HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {LoginService} from "../services/login.service";

export const _httpInterceptor: HttpInterceptorFn = (request, next) => {

    let authServices = inject(LoginService)
    let router = inject(Router);
    let token = localStorage.getItem('token');
    let SubToken!: string;


    if (token && !router.url.includes('/login')) {
        console.log(token)
        SubToken = token.toString();
        console.log(SubToken);
        SubToken.replace('{"token":"', '');
        SubToken.replace('"}', '');
        console.log(SubToken);
        request = request.clone({
            setHeaders: { Authorization: 'Bearer ' + token },
        });
        console.log(request);
    }

    return next(request).pipe(
        catchError((err: any) => {
            if (err instanceof HttpErrorResponse) {

                if(err.status === 401) {
                    router.navigateByUrl('/login');
                }else if(err.status === 403) {
                    router.navigateByUrl('/whereami');
                }else if(err.status === 404) {
                    router.navigateByUrl('/notfound');
                }else {
                    router.navigateByUrl('/login');
                }
            }
            return throwError(() => err);
        })
    );

}