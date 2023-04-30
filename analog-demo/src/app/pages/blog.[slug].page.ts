import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { Post } from './posts.page';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    <h1>First BLog Post</h1>

    {{ (post$ | async)?.content }}
  `
})
export default class BlogPostComponent {
  post$ = injectContent<Post>();
}
