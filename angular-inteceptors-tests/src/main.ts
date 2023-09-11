import { bootstrapApplication, provideProtractorTestingSupport, } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

import { AppComponent } from './app/app.component';
import { CustomErrorHandlerService } from './app/custom-error-handler.service';
import { interceptorProviders } from './app/interceptors/interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: ErrorHandler, useClass: CustomErrorHandlerService },
    ...interceptorProviders,
  ],
}).catch((err) => console.error(err));
