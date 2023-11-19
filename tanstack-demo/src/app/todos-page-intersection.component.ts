import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { intersectResults } from '@ngneat/query';
import { TodosService } from './todos.service';

@Component({
  standalone: true,
  selector: 'todo-page2',
  template: `
    @if (intersection(); as intersectionResult) {
    @if (intersectionResult.isLoading) {
    <p>Loading</p>
    }
    @if (intersectionResult.isSuccess) {
    <p>{{ intersectionResult.data }}</p>
    }
    @if (intersectionResult.isError) {
    <p>Error</p>
    }
        }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosPageIntersectionComponent {
  #todosService = inject(TodosService);

  intersection = intersectResults(
    [
      this.#todosService.getTodo('1').result,
      this.#todosService.getTodo('2').result,
    ],
    ([todoOne, todoTwo]) => todoOne.title + ' and ' + todoTwo.title
  );
}
