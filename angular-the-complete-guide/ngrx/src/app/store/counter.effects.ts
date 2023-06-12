import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';

import { decrement, increment, init, set } from './counter.actions';
import { selectCounter } from './counter.selectors';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  public loadCount = createEffect(() => this.actions$.pipe(
    ofType(init),
    switchMap(() => {
      const storedCounter = localStorage.getItem('count');
      return storedCounter ? of(set({ value: +storedCounter })) : of(set({ value: 0 }));
    })
  ));
  private store = inject(Store);
  public saveCount = createEffect(
    () => this.actions$.pipe(
      ofType(increment, decrement),
      withLatestFrom(this.store.select(selectCounter)),
      tap(([_, counter]) => localStorage.setItem('count', counter.toString()))
    ),
    { dispatch: false }
  );
}
