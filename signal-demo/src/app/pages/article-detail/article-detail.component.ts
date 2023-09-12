import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { ArticleDetailService } from './services/article-detail.service';

@Component({
  standalone: true,
  selector: 'app-article-detail',
  template: `
    <ng-container
      *ngIf="articleDetailService.article() as article; else loading"
    >
      <h1>{{ article.title }}</h1>
      <p>
        If I were determined enough to follow through with these jokes I would
        also get ChatGPT to write fake articles for these titles as well
      </p>
    </ng-container>
    <ng-template #loading>
      <p *ngIf="articleDetailService.status() === 'loading'">Loading...</p>
      <p *ngIf="articleDetailService.status() === 'error'">
        {{ articleDetailService.error() }}
      </p>
    </ng-template>
  `,
  providers: [ArticleDetailService],
  imports: [NgIf],
})
export default class ArticleDetailComponent {
  protected readonly articleDetailService = inject(ArticleDetailService);
}
