import { computed, inject, Injectable, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { retry, startWith, Subject, switchMap } from 'rxjs';

import { ArticleModel } from '../../../shared/models/article.model';
import { ApiService } from '../../../shared/services/api.service';

export interface IArticlesState {
  articles: ArticleModel[];
  filter: string | null;
  error: string | null;
  status: 'loading' | 'success' | 'error';
  currentPage: number;
}

@Injectable()
export class ArticlesService {
  filterControl = new FormControl();
  // sources
  retry$: Subject<void> = new Subject<void>();
  error$: Subject<Error> = new Subject<Error>();
  currentPage$: Subject<number> = new Subject<number>();
  filter$ = this.filterControl.valueChanges;
  filteredArticles = computed(() => {
    const filter = this.filter();

    return filter
      ? this.articles().filter((article) =>
          article.title.toLowerCase().includes(filter.toLowerCase()),
        )
      : this.articles();
  });
  private readonly apiService = inject(ApiService);
  articlesForPage$ = this.currentPage$.pipe(
    startWith(1),
    switchMap((page) =>
      this.apiService.getArticlesByPage(page).pipe(
        retry({
          delay: (err) => {
            this.error$.next(err);
            return this.retry$;
          },
        }),
      ),
    ),
  );
  private state = signal<IArticlesState>({
    articles: [],
    filter: null,
    error: null,
    status: 'loading',
    currentPage: 1,
  });
  // selectors
  articles = computed(() => this.state().articles);
  filter = computed(() => this.state().filter);
  error = computed(() => this.state().error);
  status = computed(() => this.state().status);
  currentPage = computed(() => this.state().currentPage);

  constructor() {
    // reducers
    this.articlesForPage$.pipe(takeUntilDestroyed()).subscribe((articles) =>
      this.state.update((state) => ({
        ...state,
        articles,
        status: 'success',
      })),
    );

    this.currentPage$.pipe(takeUntilDestroyed()).subscribe((currentPage) =>
      this.state.update((state) => ({
        ...state,
        currentPage,
        status: 'loading',
        articles: [],
      })),
    );

    this.filter$.pipe(takeUntilDestroyed()).subscribe((filter) =>
      this.state.update((state) => ({
        ...state,
        filter: filter === '' ? null : filter,
      })),
    );

    this.retry$
      .pipe(takeUntilDestroyed())
      .subscribe(() =>
        this.state.update((state) => ({ ...state, status: 'loading' })),
      );

    this.error$.pipe(takeUntilDestroyed()).subscribe((error) =>
      this.state.update((state) => ({
        ...state,
        status: 'error',
        error: error.message,
      })),
    );
  }
}
