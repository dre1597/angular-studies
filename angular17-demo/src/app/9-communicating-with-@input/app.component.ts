import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's occupation is {{ occupation }}</p>
  `,
  standalone: true,
})
export class UserComponent {
  @Input() occupation = '';
}

@Component({
  selector: 'app-root',
  template: `
    <app-user occupation="Angular Developer"/>
  `,
  standalone: true,
  imports: [
    UserComponent
  ]
})
export class AppComponent {}
