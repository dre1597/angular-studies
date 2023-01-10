import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  template: `
    <button (click)="onStart()">Start</button>
    <button (click)="onPause()">Pause</button>
    <button (click)="onReset()">Reset</button>
    <button (click)="onClear()">Clear</button>
  `,
})
export class ControlsComponent {
  @Output() intervalEmitter = new EventEmitter<number>();
  @Output() clearEmitter = new EventEmitter<void>();

  interval: NodeJS.Timer = null;

  count = 0;

  onStart(): void {
    this.interval = setInterval(() => {
      this.intervalEmitter.emit(this.count + 1);
      this.count++;
    }, 500);
  }

  onPause(): void {
    clearInterval(this.interval);
  }

  onReset(): void {
    this.count = 0;
  }

  onClear(): void {
    this.clearEmitter.emit();
  }
}
