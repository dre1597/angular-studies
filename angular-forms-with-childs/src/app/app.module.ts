import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomReactiveFormModule } from './reactive-form/custom-reactive-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomReactiveFormModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
