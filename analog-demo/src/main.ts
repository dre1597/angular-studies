import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';

import { AppComponent } from './app/app.component';
import { mainProviders } from './main.providers';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [provideFileRouter(), ...mainProviders, appConfig.providers],
});
