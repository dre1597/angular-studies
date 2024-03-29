import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-list-progress',
  standalone: true,
  imports: [MatProgressBarModule],
  template: ` <mat-progress-bar mode="determinate" [value]="$progress()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProgressComponent {
  @Input() disabled = false;
  protected readonly $total = signal<number>(0);
  protected readonly $page = signal<number>(0);
  protected readonly $pageSize = signal<number>(10);
  protected readonly $progress = computed<number>(() => {
    if (this.$pageSize() < 1 && this.$total() < 1) {
      return 0;
    }
    return 100 * (this.$page() / (this.$total() / this.$pageSize()));
  });

  @Input({ required: true })
  set total(total: number) {
    this.$total.set(total);
  }

  @Input() set page(page: number) {
    this.$page.set(page);
  }

  @Input() set pageSize(pageSize: number) {
    this.$pageSize.set(pageSize);
  }
}
