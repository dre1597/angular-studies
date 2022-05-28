import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TostyleComponent } from './tostyle/tostyle.component';
import { ContentComponent } from './content/content.component';
import { GreetingsPipePipe } from './greetings-pipe.pipe';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TostyleComponent,
    ContentComponent,
    GreetingsPipePipe,
    PhoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
