import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ city }}, {{ 1 + 1 }}
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
})
export class AppComponent {
  city = 'San Francisco';
}
