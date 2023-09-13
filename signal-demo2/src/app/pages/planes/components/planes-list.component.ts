import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ItemsListComponent } from '../../../shared-components/items-list/items.list.component';
import { PlanesStore } from '../planes.store';

@Component({
  selector: 'app-planes-list',
  standalone: true,
  imports: [ItemsListComponent],
  template: `
    <app-items-list
      [allItems]="planesStore.$items()"
      [page]="planesStore.$page()"
      [pageSize]="planesStore.$pageSize()"
      [disabled]="planesStore.$loading()"
      [displayDescriptions]="planesStore.$displayDescriptions()"
      (pagination)="planesStore.paginated($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesListComponent {
  protected readonly planesStore = inject(PlanesStore, { skipSelf: true });
}
