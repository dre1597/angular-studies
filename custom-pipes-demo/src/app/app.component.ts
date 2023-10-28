import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items = [
    { category: 'Electronics', name: 'TV' },
    { category: 'Books', name: 'The Lord of the Rings' },
    { category: 'Books', name: 'Harry Potter' },
    { category: 'Electronics', name: 'Laptop' },
    { category: 'Electronics', name: 'Mobile' },
  ]
}
