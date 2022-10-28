import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomModalComponent } from './custom-modal.component';

@NgModule({
  declarations: [
    CustomModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomModalComponent,
  ]
})
export class CustomModalModule {
}
