import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';

import { DateTimePickerDirective } from '../calendar/calendar-overlay.directive';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [CommonModule, DateTimePickerDirective],
  template: `
    <input [value]="date">
    <button dateTimePicker (selectDate)="setDateValue($event)">open calendar</button>
  `,
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() date: Date = new Date();

  onChanged: Function = () => {};
  onTouched: Function = () => {};

  registerOnChange(fn: Function) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  writeValue(value: Date): void {
    this.date = value;
  }

  setDateValue(date: Date) {
    this.date = date;
  }
}
