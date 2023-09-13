import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ItemsListComponent } from '../../../shared-components/items-list/items.list.component';
import { ShipsStore } from '../ships.store';

@Component({
  selector: 'app-ships-list',
  standalone: true,
  imports: [ItemsListComponent],
  template: `
    <app-items-list
      [allItems]="store.$items()"
      [page]="store.$page()"
      [pageSize]="store.$pageSize()"
      [disabled]="store.$loading()"
      (pagination)="store.paginated($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsListComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
