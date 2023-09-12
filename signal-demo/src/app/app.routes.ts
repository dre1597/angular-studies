import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'articles',
    loadComponent: () =>
      import('./pages/articles/articles.component').then((m) => m.default),
  },
  {
    path: 'articles/:id',
    loadComponent: () =>
      import('./pages/article-detail/article-detail.component').then(
        (m) => m.default,
      ),
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full',
  },
];
