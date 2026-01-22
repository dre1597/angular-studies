import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [FooterComponent, MenuComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [FooterComponent, MenuComponent],
})
export class LayoutModule {}
