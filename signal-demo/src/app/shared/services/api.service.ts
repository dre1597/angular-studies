import { Injectable } from '@angular/core';
import { delay, of, switchMap, throwError } from 'rxjs';

import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly DELAY_VALUE = 200;

  private articles: ArticleModel[] = [
    {
      id: '1',
      title: 'Breaking News: JavaScript Sentient, Demands Paid Vacation',
    },
    {
      id: '2',
      title: 'CSS Developers Reveal: Our Pants Are Made of Code',
    },
    {
      id: '3',
      title: 'New Study Finds Python Developers Have Superior Sock Collection',
    },
    {
      id: '4',
      title: 'Exclusive: Web Developers Discover Hidden "Easter Egg" in HTML!',
    },
    {
      id: '5',
      title:
        'Developers Who Master Angular Bend Space-Time Continuum in Their Spare Time',
    },
    {
      id: '6',
      title:
        'Angular Applications Run 42% Faster When Serenaded with Smooth Jazz',
    },
  ];

  public articles$ = of(this.articles).pipe(delay(this.DELAY_VALUE));
  public articlesFail$ = of(this.articles).pipe(
    delay(this.DELAY_VALUE),
    switchMap(() =>
      Math.random() < 0.8
        ? throwError(() => new Error('Oops'))
        : of(this.articles),
    ),
  );

  public getArticleById(id: string | null) {
    const article = this.articles.find((article) => article.id === id);

    if (!article) {
      return throwError(() => new Error('Must not be null'));
    }

    return of(article).pipe(delay(this.DELAY_VALUE));
  }

  public getArticlesByPage(page: number) {
    const articles = this.articles.map((article) => ({
      ...article,
      title: `Page ${page}: ${article.title}`,
    }));

    return of(articles).pipe(
      delay(this.DELAY_VALUE),
      switchMap(() =>
        Math.random() < 0.1
          ? throwError(() => new Error('Oops'))
          : of(articles),
      ),
    );
  }
}
