import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

import { ArticleModel } from '../../../shared/models/article.model';

@Component({
  standalone: true,
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let article of articles">
        <a [routerLink]="article.id">{{ article.title }}</a>
      </li>
    </ul>
  `,
  imports: [NgForOf, RouterLink],
  styles: [
    `
      ul {
        padding: 0;
      }

      li {
        border: 1px solid #bdc3c7;
        list-style: none;
        margin-bottom: 1rem;
        padding: 1rem;
      }
    `,
  ],
})
export class ListComponent {
  @Input({ required: true }) public articles!: ArticleModel[];
}
