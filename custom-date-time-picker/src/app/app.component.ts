import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateTimePickerDirective } from './components/calendar/calendar-overlay.directive';

import { DateInputComponent } from './components/date-input/date-input.component';
import { DateTimePickerComponent } from './components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DateTimePickerComponent, DateTimePickerDirective, DateInputComponent],

  templateUrl: './app.component.html',
})
export class AppComponent {
  date = new Date();
}
