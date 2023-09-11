import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { PopUpNotificationService } from '../pop-up-notification.service';

@Injectable()
export class ErrorNotifierInterceptor implements HttpInterceptor {

  private readonly popUpNotificationService = inject(PopUpNotificationService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            this.popUpNotificationService.error(err.error.message);
          }
        }
      })
    );
  }
}
