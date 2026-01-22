import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCountComponent } from './product-count/product-count.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent, ProductCountComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
