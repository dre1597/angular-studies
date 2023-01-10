import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: '<p>Odd: {{ number }}</p>',
  styles: ['p { background-color: lightyellow; color: black; }']
})
export class OddComponent {
  @Input() number: number;
}
