import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  public actions = signal<string[]>([]);
  public counter = signal<number>(0);
  // values that uses a signal
  public doubleCounter = computed(() => this.counter() * 2);

  // set you simple set the value of the signal
  // update is used to help when you want to use the old value
  // mutate is a update method but used to help with mutable values like arrays or objects

  constructor() {
    // code that depende on signals
    effect(() => console.log(this.counter()));
  }

  public increment(): void {
    // this.counter.update(oldCounter => oldCounter + 1);
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  public decrement(): void {
    this.counter.update(oldCounter => oldCounter - 1);
    this.actions.mutate((oldActions) => oldActions.push('DECREMENT'));
  }
}
