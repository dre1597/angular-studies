import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2">
          <app-users [isActive]="true"></app-users>
          <app-users [isActive]="false"></app-users>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
}
