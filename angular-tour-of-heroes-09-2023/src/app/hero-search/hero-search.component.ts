import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';

import { THero } from '../types/hero.type';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  protected heroes$!: Observable<THero[]>;
  private searchTerms = new Subject<string>();

  private readonly heroService = inject(HeroService);

  public ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // Push a search term into the observable stream.
  protected search(term: string): void {
    this.searchTerms.next(term);
  }
}
