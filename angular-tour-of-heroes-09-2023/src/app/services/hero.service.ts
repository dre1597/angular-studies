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
}
