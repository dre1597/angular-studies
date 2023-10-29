import { Component } from '@angular/core';

type Item = {
  category: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: Item[] = [
    { category: 'Electronics', name: 'TV', price: 500 },
    { category: 'Books', name: 'The Lord of the Rings', price: 50 },
    { category: 'Books', name: 'Harry Potter', price: 30 },
    { category: 'Electronics', name: 'Laptop', price: 1000 },
    { category: 'Electronics', name: 'Mobile', price: 500 },
  ]

  markdownText = `
    # Angular Pipes Demo
    This is a markdown text that should be rendered as HTML
  `
}
