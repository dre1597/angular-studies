import { inject, Injectable, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, tap } from 'rxjs';

import { AppStore } from '../../app.store';
import { createEffect } from '../../../utils/create-effect';

@Injectable()
export class PlanesStore {
  private readonly DEBOUNCE_DELAY = 200;

  private readonly appStore = inject(AppStore);
  public readonly $items = this.appStore.$planes;
  public readonly $loading = this.appStore.$loadingPlanes;
  private readonly state = {
    $page: signal<number>(0),
    $pageSize: signal<number>(10),
    $displayDescriptions: signal<boolean>(false),
  } as const;
  public readonly $page = this.state.$page.asReadonly();
  public readonly $pageSize = this.state.$pageSize.asReadonly();
  public readonly $displayDescriptions =
    this.state.$displayDescriptions.asReadonly();

  public readonly paginated = createEffect<PageEvent>((_) =>
    _.pipe(
      debounceTime(this.DEBOUNCE_DELAY),
      tap((event) => {
        this.state.$page.set(event.pageIndex);
        this.state.$pageSize.set(event.pageSize);
      }),
    ),
  );

  public setDisplayDescriptions(display: boolean) {
    this.state.$displayDescriptions.set(display);
  }
}
