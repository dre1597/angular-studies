import { Routes } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    title: 'Heroes',
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    title: 'Hero Detail',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
];
