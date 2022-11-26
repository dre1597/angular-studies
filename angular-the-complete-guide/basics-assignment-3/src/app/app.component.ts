import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  logs: string[] = [];

  toggleSecret(): void {
    const oldState = this.show;
    this.show = !this.show;
    this.logs.push(`from ${oldState} to ${this.show}.`);
  }
}
