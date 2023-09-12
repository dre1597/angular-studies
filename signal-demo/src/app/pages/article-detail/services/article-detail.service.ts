import { computed, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { ArticleModel } from '../../../shared/models/article.model';
import { ApiService } from '../../../shared/services/api.service';

export interface ArticleDetailState {
  article: ArticleModel | null;
  status: 'loading' | 'success' | 'error';
  error: string | null;
}

@Injectable()
export class ArticleDetailService {
  private apiService = inject(ApiService);
  private paramMap = inject(ActivatedRoute).paramMap;
  // sources
  private articleLoaded$ = this.paramMap.pipe(
    switchMap((params) => this.apiService.getArticleById(params.get('id'))),
  );
  private state = signal<ArticleDetailState>({
    article: null,
    status: 'loading',
    error: null,
  });
  // selectors
  public article = computed(() => this.state().article);
  public status = computed(() => this.state().status);
  public error = computed(() => this.state().error);

  constructor() {
    //  reducers
    this.articleLoaded$.pipe(takeUntilDestroyed()).subscribe({
      next: (article) =>
        this.state.update((state) => ({
          ...state,
          article,
          status: 'success',
          error: null,
        })),
      error: (error) =>
        this.state.update((state) => ({ ...state, error, status: 'error' })),
    });
  }
}
