import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PageIndicatorComponent } from '../../../shared-components/page-indicator.component';
import { ShipsStore } from '../ships.store';

@Component({
  selector: 'app-ships-page-indicator',
  standalone: true,
  imports: [PageIndicatorComponent],
  template: ` <app-page-indicator [page]="store.$page()" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsPageIndicatorComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
