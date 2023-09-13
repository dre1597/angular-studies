import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ShipsListComponent } from './components/ships-list.component';
import { ShipsPageIndicatorComponent } from './components/ships-list-page-indicator.component';
import { ShipsListProgressComponent } from './components/ships-list-progress.component';
import { ShipsStore } from './ships.store';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [
    MatCardModule,
    ShipsListComponent,
    ShipsPageIndicatorComponent,
    ShipsListProgressComponent,
  ],
  templateUrl: './ships.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ShipsStore],
})
export class ShipsComponent {}
