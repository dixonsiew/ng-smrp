import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHandlerFn } from '@angular/common/http';
// import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';
import { ToastrService } from 'ngx-toastr';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const toasterService = inject(ToastrService);
  return next(req)
    .pipe(
      catchError((error) => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          if ([400, 500].indexOf(error.status) !== -1) {
            if (req.url.indexOf('/o/token') >= 0) {
              return throwError(() => error);
            }

            // if (error.error.validationError) {
            //   const err = error.error.validationError;
            //   let lx: string[] = [];
            //   let i = 1;
            //   for (const [key, value] of Object.entries(err)) {
            //     lx.push(`${i}. ${value}`);
            //     ++i;
            //   }

            //   const s: string = lx.join('<br/>');
            //   this.toasterService.error(s, 'Invalid data', { enableHtml: true });
            //   // this.toasterService.error(s, 'Invalid data', { enableHtml: true, closeButton: true, timeOut: 0, extendedTimeOut: 0 });
            // }

            else if (error.error.message) {
              if (Array.isArray(error.error.message)) {
                const s: string = error.error.message.join('<br/>');
                toasterService.error(s, 'Invalid data', { enableHtml: true });
              }

              else {
                toasterService.error(error.error.message);
              }
            }
          }

          else if (error.status === 404) {
            if (error.error.message) {
              toasterService.error('Not Found!', error.error.message);
            }

            else {
              toasterService.error('Not Found!', '404 - API not Found');
            }
          }
        }

        else if (error instanceof TimeoutError) {
          toasterService.error('API Request Timeout!', 'Timeout');
        }

        return throwError(() => error);
      })
    );
}

@Injectable()
export class ErrorInterceptor00 implements HttpInterceptor {

  // bsModalRef: BsModalRef;

  constructor(
    private toasterService: ToastrService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error) => {
          console.log(error);
          if (error instanceof HttpErrorResponse) {
            if ([400, 500].indexOf(error.status) !== -1) {
              if (request.url.indexOf('/o/token') >= 0) {
                return throwError(() => error);
              }

              // if (error.error.validationError) {
              //   const err = error.error.validationError;
              //   let lx: string[] = [];
              //   let i = 1;
              //   for (const [key, value] of Object.entries(err)) {
              //     lx.push(`${i}. ${value}`);
              //     ++i;
              //   }

              //   const s: string = lx.join('<br/>');
              //   this.toasterService.error(s, 'Invalid data', { enableHtml: true });
              //   // this.toasterService.error(s, 'Invalid data', { enableHtml: true, closeButton: true, timeOut: 0, extendedTimeOut: 0 });
              // }

              else if (error.error.message) {
                if (Array.isArray(error.error.message)) {
                  const s: string = error.error.message.join('<br/>');
                  this.toasterService.error(s, 'Invalid data', { enableHtml: true });
                }

                else {
                  this.toasterService.error(error.error.message);
                }
              }
            }

            else if (error.status === 404) {
              if (error.error.message) {
                this.toasterService.error('Not Found!', error.error.message);
              }

              else {
                this.toasterService.error('Not Found!', '404 - API not Found');
              }
            }
          }

          else if (error instanceof TimeoutError) {
            this.toasterService.error('API Request Timeout!', 'Timeout');
          }

          return throwError(() => error);
        })
      );
  }
}
