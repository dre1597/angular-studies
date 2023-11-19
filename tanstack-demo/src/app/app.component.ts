import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TodosPageComponent } from './todos-page.component';
import { TodosPageIntersectionComponent } from './todos-page-intersection.component';
import { TodosPageRxjsComponent } from './todos-page-rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TodosPageComponent,
    TodosPageIntersectionComponent,
    TodosPageRxjsComponent
  ],
  template: `
    <h1>Todo Page 1</h1>
    <todo-page></todo-page>
    <h1>Todo Page 2</h1>
    <todo-page2></todo-page2>
    <h1>Todo Page 3</h1>
    <todo-page3></todo-page3>
  `,
})
export class AppComponent {}
