import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: '<p>Even: {{ number }}</p>',
  styles: ['p { background-color: black; color: white; }']
})
export class EvenComponent {
  @Input() number: number;
}
