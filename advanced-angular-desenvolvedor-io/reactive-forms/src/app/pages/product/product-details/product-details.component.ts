import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  @Input() product: Product = {} as Product;

  @Output() changeStatus = new EventEmitter<Product>();
}
