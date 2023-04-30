import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1>First BLog Post</h1>

    {{ slug$ | async }}
  `
})
export default class BlogPostComponent {
  route = inject(ActivatedRoute);
  slug$ = this.route.paramMap.pipe(map(params => params.get('slug')));
}
