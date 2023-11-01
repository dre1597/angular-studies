import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input autofocus>
  `,
  // template: `
  //   <button (click)="show = !show">Toggle</button>
  //   <input *ngIf="show" #input>
  // `,
  styles: [],
})
export class AppComponent {
  // protected show = false;

  @ViewChild('input', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }
}
