import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ListProgressComponent } from '../../../shared-components/list-progress.component';
import { ShipsStore } from '../ships.store';

@Component({
  selector: 'app-ships-list-progress',
  standalone: true,
  imports: [ListProgressComponent],
  template: `
    <app-list-progress
      [page]="store.$page()"
      [pageSize]="store.$pageSize()"
      [total]="store.$items().length"
      [disabled]="store.$loading()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsListProgressComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
