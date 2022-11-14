import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: Post): void {
    // Send Http request
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-92ba8-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(): void {
    this.isFetching = true;
    this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-92ba8-default-rtdb.firebaseio.com/posts.json')
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
      ).subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }
}
