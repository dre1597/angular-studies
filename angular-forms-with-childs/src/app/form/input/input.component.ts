import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() label: string;
  @Input() formControlName: string;
  @Input() parentForm: FormGroup;
}
