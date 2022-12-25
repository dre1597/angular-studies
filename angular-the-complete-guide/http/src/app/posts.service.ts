import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: Post): void {
    this.http
      .post<{ name: string }>(
        `${environment.baseUrl}/posts.json`,
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
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
        )
      );
  }

  deletePosts(): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/posts.json`);
  }
}
