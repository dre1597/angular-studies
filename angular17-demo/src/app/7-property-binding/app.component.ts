import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [contentEditable]="isEditable">
    </div>
  `,
  standalone: true,
})
export class AppComponent {
  isEditable = true;
}
