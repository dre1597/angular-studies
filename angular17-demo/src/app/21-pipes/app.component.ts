import { Component, Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';

@Pipe({
  standalone: true,
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number:"3.2-2" }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
    {{ username | uppercase }}
    {{ username | reverse }}

  `,
  standalone: true,
  imports: [
    UpperCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    ReversePipe,
  ],
})
export class AppComponent {
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
