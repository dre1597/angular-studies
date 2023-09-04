import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { HEROES } from '../mocks/heroes.mock';
import { THero } from '../types/hero.type';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly messageService = inject(MessageService);

  public getHeroes(): Observable<THero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  public getHero(id: number): Observable<THero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
