import { Component } from '@angular/core';

import { Product } from './models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Teste',
      active: true,
      value: 100,
      image: 'phone.jpg',
    },
    {
      id: 2,
      name: 'Teste 2',
      active: true,
      value: 200,
      image: 'gopro.jpg',
    },
    {
      id: 3,
      name: 'Teste 3',
      active: true,
      value: 300,
      image: 'notebook.jpg',
    },
    {
      id: 4,
      name: 'Teste 4',
      active: true,
      value: 400,
      image: 'mouse.jpg',
    },
    {
      id: 5,
      name: 'Teste 5',
      active: true,
      value: 500,
      image: 'keyboard.jpg',
    },
    {
      id: 6,
      name: 'Teste 6',
      active: false,
      value: 600,
      image: 'headset.jpg',
    },
  ];

  changeStatus(product: Product): void {
    product.active = !product.active;
  }
}
