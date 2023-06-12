import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  private store: Store = inject(Store);

  public incrementBy(value = 1): void {
    this.store.dispatch(increment({ value }));
  }

  public decrementBy(value = 1): void {
    this.store.dispatch(decrement({ value }));
  }
}
