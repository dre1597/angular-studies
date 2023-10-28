import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UppercaseFirstPipe } from './pipes/uppercase-first.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseFirstPipe,
    ReverseStringPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
