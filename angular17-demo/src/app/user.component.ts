import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'John Doe';
}
