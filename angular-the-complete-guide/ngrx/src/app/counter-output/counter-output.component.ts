import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCounter, selectDoubleCounter } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  public count$: Observable<number>;
  public doubleCount$: Observable<number>;

  private store: Store<{ counter: number }> = inject(Store);

  constructor() {
    this.count$ = this.store.select(selectCounter);
    this.doubleCount$ = this.store.select(selectDoubleCounter);
  }
}
