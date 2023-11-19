import { Component, inject } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  standalone: true,
  selector: 'todo-page',
  template: `
    @if (todos(); as result) {
    @if (result.isLoading) {
    <p>Loading</p>
    }
    @if (result.isSuccess) {
    <p>{{ result.data[0].title }}</p>
    }
    @if (result.isError) {
    <p>Error</p>
    }
      }
  `,
})
export class TodosPageComponent {
  todos = inject(TodosService).getTodos().result;
}
