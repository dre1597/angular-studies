import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomReactiveFormComponent } from './custom-reactive-form.component';

import { CustomReactiveFormInputComponent } from './input/custom-reactive-form-input.component';

@NgModule({
  declarations: [CustomReactiveFormComponent, CustomReactiveFormInputComponent],
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  exports: [CustomReactiveFormComponent],
})
export class CustomReactiveFormModule {}
