import { Component, inject, OnInit } from '@angular/core';

import { ConfigService } from './initializer/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly config = inject(ConfigService);

  public ngOnInit(): void {
    this.config.api$.subscribe({
      next: (data) => {
        console.log('app initializer => ', data);
      }
    });
  }
}
