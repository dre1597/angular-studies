import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  standalone: true,
  imports: [NgFor],
})
export class DefaultComponent {
  public actions: string[] = [];
  public counter = 0;

  public increment(): void {
    this.counter++;
    this.actions.push('INCREMENT');
  }

  public decrement(): void {
    this.counter--;
    this.actions.push('DECREMENT');
  }
}
