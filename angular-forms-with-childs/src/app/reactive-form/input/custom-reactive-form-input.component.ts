import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './custom-reactive-form-input.component.html',
})
export class CustomReactiveFormInputComponent {
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() label: string;
  @Input() controlName: string;
  @Input() parentForm: FormGroup;
}
