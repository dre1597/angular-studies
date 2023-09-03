import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  imports: [HomeComponent],
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {}
