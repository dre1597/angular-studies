import { bootstrapApplication, provideProtractorTestingSupport, } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi, } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TokenInterceptor } from './app/token.interceptor';
import { CustomErrorHandlerService } from './app/custom-error-handler.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
    { provide: ErrorHandler, useClass: CustomErrorHandlerService },
  ],
}).catch((err) => console.error(err));
