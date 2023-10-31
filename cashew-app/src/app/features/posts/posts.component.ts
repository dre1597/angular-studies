import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  posts$?: Observable<any[]>;

  constructor(private coreService: CoreService) {
    this.posts$ = coreService.getPosts();
  }

  get randomDate() {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getImage(post: any) {
    return `https://picsum.photos/id/${post.id + 100}/800/400`;
  }

  getDefaultImage(element: any) {
    element.target.onerror = null;
    element.target.src = 'https://picsum.photos/id/684/800/400';
  }
}
