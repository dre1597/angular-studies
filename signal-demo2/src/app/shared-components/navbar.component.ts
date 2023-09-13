import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppStore } from '../app.store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
    <mat-toolbar>
      <span>Example App</span>

      <span class="example-spacer"></span>

      <button mat-fab (click)="reset()" color="primary" aria-label="Reload All">
        <mat-icon>restart_alt</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class NavbarComponent {
  private readonly appStore = inject(AppStore);

  protected reset() {
    this.appStore.generateAll();
  }
}
