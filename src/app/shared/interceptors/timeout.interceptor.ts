import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHandlerFn } from '@angular/common/http';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';
import { AppConstant } from 'src/app/shared/constants/app.constant';

export function httpTimeoutInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req)
    .pipe(
      timeout(AppConstant.NETWORK_TIMEOUT)
    )
    .pipe(
      catchError((error) => {
        if (error instanceof TimeoutError) {
          return throwError(() => error);
        }

        else if (error instanceof HttpErrorResponse) {
          return throwError(() => error);
        }

        return throwError(() => error);
      })
    );
}

@Injectable({
  providedIn: 'root'
})
export class HttpTimeoutInterceptor00 implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      timeout(AppConstant.NETWORK_TIMEOUT)
    )
    .pipe(
      catchError((error) => {
        if (error instanceof TimeoutError) {
          return throwError(() => error);
        }

        else if (error instanceof HttpErrorResponse) {
          return throwError(() => error);
        }

        return throwError(() => error);
      })
    );
  }
}
