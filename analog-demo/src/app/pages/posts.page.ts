import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';

export type Post = {
  title: string;
  slug: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <ul>
      <li *ngFor="let post of posts">
        <a routerLink="/blog/{{ post.attributes.slug }}">{{ post.attributes.title }}</a>
      </li>
    </ul>
  `
})
export default class PostsPageComponent {
  posts = injectContentFiles<Post>();
}
