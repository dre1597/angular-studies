import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component';
import { EvenComponent } from './components/even/even.component';
import { OddComponent } from './components/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
