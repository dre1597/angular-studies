import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormInputComponent } from './input/template-driven-form-input.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  declarations: [TemplateDrivenFormComponent, TemplateDrivenFormInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [TemplateDrivenFormComponent, TemplateDrivenFormInputComponent],
})
export class TemplateDrivenFormModule {}
