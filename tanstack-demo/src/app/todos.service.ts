import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { injectQuery, toPromise } from '@ngneat/query';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodosService {
  #http = inject(HttpClient);
  #query = injectQuery();

  getTodos() {
    return this.#query({
      queryKey: ['todos'] as const,
      queryFn: ({ signal }) => {
        const source = this.#http.get<Todo[]>(
          'https://jsonplaceholder.typicode.com/todos'
        );

        return toPromise({ source, signal });
      },
    });
  }

  getTodo(id: string) {
    return this.#query({
      queryKey: ['todo', id] as const,
      queryFn: ({ signal }) => {
        const source = this.#http.get<Todo>(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        return toPromise({ source, signal });
      }
    });
  }
}
