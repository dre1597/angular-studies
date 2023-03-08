import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-driven-input',
  templateUrl: './template-driven-form-input.component.html',
})
export class TemplateDrivenFormInputComponent {
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() label: string;

  input: string;
}
