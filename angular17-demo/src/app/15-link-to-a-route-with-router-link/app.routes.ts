import { Routes } from '@angular/router';
import { HomeComponent, UserComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'User Page',
    component: UserComponent,
  }
];
