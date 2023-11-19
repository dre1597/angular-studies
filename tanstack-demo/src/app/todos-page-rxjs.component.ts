import { Component, inject } from '@angular/core';
import { TodosService } from './todos.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'todo-page3',
  imports: [
    AsyncPipe
  ],
  template: `
    @if (todos.result$ | async; as result) {
    @if (result.isLoading) {
    <p>Loading</p>
    }
    @if (result.isSuccess) {
    @for (todo of result.data.slice(0, 10); track todo.id) {
    <p>{{ todo.title }}</p>
    }
    }
    @if (result.isError) {
    <p>Error</p>
    }
        }
  `,
})
export class TodosPageRxjsComponent {
  todos = inject(TodosService).getTodos();
}
