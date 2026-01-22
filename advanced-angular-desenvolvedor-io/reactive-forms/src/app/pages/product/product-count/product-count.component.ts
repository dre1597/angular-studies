import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
})
export class ProductCountComponent {
  @Input() products: Product[] = [];

  countActives(): number {
    return this.products.filter((product) => product.active).length;
  }
}
