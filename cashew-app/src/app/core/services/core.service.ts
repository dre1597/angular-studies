import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private url: string = 'https://jsonplaceholder.typicode.com/'
  private postUrl: string = 'posts';
  private userUrl: string = 'users';
  private readonly http = inject(HttpClient)

  private options = {
    context: withCache({
      version: 'v1',
      key: 'omelet'
    })
  };
  
  getPosts() {
    const url = `${this.url}${this.postUrl}?userId=1`;
    return this.http.get<any>(url, this.options);
  }

  getUsers() {
    const url = `${this.url}${this.userUrl}`;
    return this.http.get<any>(url, this.options);
  }
}
