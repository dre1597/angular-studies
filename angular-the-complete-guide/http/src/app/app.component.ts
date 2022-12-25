import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;

  error: string = null;

  private _subscriptions: Subscription[] = [];

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this._subscribeToErrorSubject();
    this._fetchPosts();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onCreatePost(postData: Post): void {
    this.postService.createAndStorePost(postData);
  }

  onFetchPosts(): void {
    this._fetchPosts();
  }

  onClearPosts(): void {
    const deletePostsSubscription = this.postService.deletePosts().subscribe({
      next: () => {
        this.loadedPosts = [];
      }, error: () => {
        this.error = 'Error on deleting posts';
      }
    });

    this._subscriptions.push(deletePostsSubscription);
  }

  onHandleError(): void {
    this.error = null;
  }

  private _subscribeToErrorSubject(): void {
    const errorSubscription = this.postService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this._subscriptions.push(errorSubscription);
  }

  private _fetchPosts(): void {
    this.isFetching = true;

    const fetchPostsSubscription = this.postService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: () => {
        this.isFetching = false;
        this.error = 'Error on fetching posts';
      }
    });

    this._subscriptions.push(fetchPostsSubscription);
  }
}
