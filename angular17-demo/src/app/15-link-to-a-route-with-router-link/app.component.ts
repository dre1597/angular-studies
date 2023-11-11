import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div>Home Page</div>
  `,
  standalone: true,
})
export class HomeComponent {}


@Component({
  selector: 'app-user',
  template: `
    <div>User Page</div>
  `,
  standalone: true,
})
export class UserComponent {}

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
      <router-outlet />
    </nav>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}



