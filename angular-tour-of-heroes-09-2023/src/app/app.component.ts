import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';
import { MessagesComponent } from './components/messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected title = 'Tour of Heroes';
}
