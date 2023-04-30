import { ApplicationConfig } from '@angular/platform-browser';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';

export const appConfig: ApplicationConfig = {
  providers: [
    provideContent(withMarkdownRenderer())
  ]
};
