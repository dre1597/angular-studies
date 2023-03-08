import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './form/input/input.component';

@NgModule({
  declarations: [AppComponent, FormComponent, InputComponent],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
