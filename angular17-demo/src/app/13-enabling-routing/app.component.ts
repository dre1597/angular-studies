import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
      <router-outlet />
    </nav>
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}

