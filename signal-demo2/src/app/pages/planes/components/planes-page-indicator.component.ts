import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PageIndicatorComponent } from '../../../shared-components/page-indicator.component';
import { PlanesStore } from '../planes.store';

@Component({
  selector: 'app-planes-page-indicator',
  standalone: true,
  imports: [PageIndicatorComponent],
  template: ` <app-page-indicator [page]="store.$page()" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesPageIndicatorComponent {
  protected readonly store = inject(PlanesStore, { skipSelf: true });
}
