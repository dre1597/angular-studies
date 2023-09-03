import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HEROES } from '../mocks/heroes.mock';
import { THero } from '../types/hero.type';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  protected heroes: THero[] = HEROES;
  protected selectedHero?: THero;

  protected onSelect(hero: THero): void {
    this.selectedHero = hero;
  }
}
