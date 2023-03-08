import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemplateDrivenFormInputComponent } from './input/template-driven-form-input.component';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
})
export class TemplateDrivenFormComponent {
  @ViewChild('form', { static: false }) form: NgForm;
  @ViewChildren('input') inputs: TemplateDrivenFormInputComponent[];

  onSubmit(): void {
    const values: { [p: string]: string } = {};

    for (const input of this.inputs) {
      values[input.name] = input.input;
    }

    console.log(values);
  }
}
