import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-controls (intervalEmitter)="onIntervalEmit($event)" (clearEmitter)="onClearEmit()"></app-controls>
    <app-odd *ngFor="let oddNumber of oddNumbers" [number]="oddNumber"></app-odd>
    <app-even *ngFor="let evenNumber of evenNumbers" [number]="evenNumber"></app-even>`,
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalEmit(number: number): void {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }

  onClearEmit(): void {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}
