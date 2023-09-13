import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ListProgressComponent } from '../../../shared-components/list-progress.component';
import { PlanesStore } from '../planes.store';

@Component({
  selector: 'app-planes-list-progress',
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
export class PlanesListProgressComponent {
  protected readonly store = inject(PlanesStore, { skipSelf: true });
}
