import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-indicator',
  standalone: true,
  template: `Page: {{ page + 1 }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageIndicatorComponent {
  @Input({ required: true }) public page!: number;
}
