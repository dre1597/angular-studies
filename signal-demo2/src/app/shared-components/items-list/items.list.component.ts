import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { ItemsListStore } from './items-list.store';
import { Item } from '../../../types';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatPaginatorModule,
    MatIconModule,
    NgForOf,
    NgIf,
  ],
  template: ` <mat-accordion [multi]="false">
      <mat-expansion-panel
        *ngFor="let item of store.$items()"
        [expanded]="item === store.$selectedItem()"
        (afterExpand)="setSelected(item, true)"
        (afterCollapse)="setSelected(item, false)"
        [disabled]="disabled"
      >
        <mat-expansion-panel-header>
          <mat-panel-title>{{ item.title }}</mat-panel-title>

          <mat-panel-description *ngIf="displayDescriptions">
            {{ item.description }}
          </mat-panel-description>

          <mat-icon *ngIf="item === store.$selectedItem()"
            >radio_button_checked
          </mat-icon>
        </mat-expansion-panel-header>

        <div class="item-body">{{ item.body }}</div>
      </mat-expansion-panel>
    </mat-accordion>

    <mat-paginator
      [length]="store.$total()"
      [pageSize]="store.$pageSize()"
      [pageSizeOptions]="pageSizeOptions"
      aria-label="Select page"
      (page)="pagination.emit($event)"
    />`,
  styles: [
    `
      .item-body {
        padding: 1em;
      }
    `,
  ],
  providers: [ItemsListStore],
})
export class ItemsListComponent {
  @Input() displayDescriptions = false;
  @Input() disabled = false;
  @Output() pagination = new EventEmitter<PageEvent>();
  protected readonly store = inject(ItemsListStore);
  protected pageSizeOptions = [5, 10, 25, 100];

  @Input({ required: true })
  set allItems(allItems: Item[]) {
    this.store.$allItems.set(allItems);
  }

  @Input() set page(page: number) {
    this.store.$page.set(page);
  }

  @Input() set pageSize(pageSize: number) {
    this.store.$pageSize.set(pageSize);
  }

  protected setSelected(item: Item, selected: boolean) {
    this.store.setSelected({ item, selected });
  }
}
