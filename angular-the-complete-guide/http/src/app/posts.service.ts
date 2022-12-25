import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';

import { environment } from '../environments/environment';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: Post): void {
    this.http
      .post<{ name: string }>(
        `${environment.baseUrl}/posts.json`,
        postData
      )
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: () => {
          this.error.next('Error on creating and storing posts');
        }
      });
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<{ [key: string]: Post }>(`${environment.baseUrl}/posts.json`)
      .pipe(map((responseData) => {
            const postsArrays: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArrays.push({...responseData[key], id: key});
              }
            }
            return postsArrays;
          }
        ),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts(): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/posts.json`);
  }
}
