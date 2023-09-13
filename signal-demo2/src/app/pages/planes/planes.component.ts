import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';

import { PlanesListComponent } from './components/planes-list.component';
import { PlanesPageIndicatorComponent } from './components/planes-page-indicator.component';
import { PlanesListProgressComponent } from './components/planes-list-progress.component';
import { PlanesStore } from './planes.store';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [
    MatCardModule,
    PlanesListComponent,
    PlanesPageIndicatorComponent,
    PlanesListProgressComponent,
    MatSlideToggleModule,
    NgIf,
  ],
  templateUrl: './planes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlanesStore],
})
export class PlanesComponent {
  protected readonly store = inject(PlanesStore);

  protected displayDescriptions(display: boolean) {
    this.store.setDisplayDescriptions(display);
  }
}
