import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConfirmationFormComponent } from './multi-step-form/confirmation-form/confirmation-form.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { OpeningInformationFormComponent } from './multi-step-form/opening-information-form/opening-information-form.component';
import { PersonalInformationFormComponent } from './multi-step-form/personal-information-form/personal-information-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepFormComponent,
    PersonalInformationFormComponent,
    OpeningInformationFormComponent,
    ConfirmationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
