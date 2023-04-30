import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  template: `
    <h1>Parent Route</h1>
  `
})
export default class ParentPageComponent {}
