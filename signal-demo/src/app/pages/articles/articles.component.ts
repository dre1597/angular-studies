import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { ListComponent } from './components/list.component';
import { SearchComponent } from './components/search.component';
import { PaginationComponent } from './components/pagination.component';
import { ArticlesService } from './services/articles.service';

@Component({
  standalone: true,
  selector: 'app-articles',
  providers: [ArticlesService],
  template: `
    <app-search [control]="articlesService.filterControl" />
    <app-list [articles]="articlesService.filteredArticles()" />

    <div class="status">
      <p *ngIf="articlesService.status() === 'loading'">Loading...</p>
      <div *ngIf="articlesService.status() === 'error'">
        <p>{{ articlesService.error() }}</p>
        <button (click)="articlesService.retry$.next()">Retry</button>
      </div>
    </div>

    <app-pagination
      [currentPage]="articlesService.currentPage()"
      (pageChange)="articlesService.currentPage$.next($event)"
    />
  `,
  imports: [ListComponent, SearchComponent, PaginationComponent, NgIf],
  styles: [
    `
      :host {
        display: block;
        background-color: #ecf0f1;
        padding: 2rem;
      }

      .status {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        align-items: center;
      }
    `,
  ],
})
export default class ArticlesComponent {
  protected readonly articlesService = inject(ArticlesService);
}
