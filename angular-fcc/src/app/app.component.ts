import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-fcc';

  showText = false;

  todaysDate = new Date();
  money = 10;

  toggleText(event: MouseEvent): void {
    this.showText = !this.showText;
    console.log(event);
  }
}
