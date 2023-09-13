import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './shared-components/navbar.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    MatTabsModule,
    PlanesComponent,
    ShipsComponent,
    MatIconModule,
    NgIf,
  ],
})
export class AppComponent {
  protected readonly store = inject(AppStore);
}
