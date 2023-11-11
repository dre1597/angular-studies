import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
  standalone: true,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}


@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)"/>
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  standalone: true,
  imports: [ChildComponent],
})
export class AppComponent {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}
