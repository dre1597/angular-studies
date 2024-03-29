import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  Output,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { LIST_DATA, ListOverlayComponent } from './list-overlay.component';

@Directive({
  selector: '[appList]',
  standalone: true,
})
export class ListOverlayDirective implements OnDestroy {
  @Input() public listData: string[] | number[];
  @Input() public selected: number;

  @Output() public selectMonth = new EventEmitter<number>();
  @Output() public selectYear = new EventEmitter<number>();

  private overlayRef: OverlayRef | null = null;
  private showListTimeout: ReturnType<typeof setTimeout>;
  private subscriptions: Subscription[] = [];

  constructor(
    private element: ElementRef<HTMLElement>,
    private overlay: Overlay,
    private viewContainer: ViewContainerRef,
    private changeDetector: ChangeDetectorRef
  ) {}

  @HostListener('blur')
  hide(): void {
    clearTimeout(this.showListTimeout);
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.showListTimeout);
    this.overlayRef?.dispose();
  }

  // We can add logic to some timeout on touch if needed
  @HostListener('click')
  @HostListener('focus')
  protected show(): void {
    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    this.showListTimeout = setTimeout(() => {
      this.attachList();
    }, 100);
  }

  private attachList(): void {
    if (this.overlayRef === null) {
      const positionStrategy = this.getPositionStrategy();
      this.overlayRef = this.overlay.create({ positionStrategy });
    }

    const injector = Injector.create({
      providers: [
        {
          provide: LIST_DATA,
          useValue: {
            list: this.listData,
            selectedIndex: this.selected || 0,
          },
        },
      ],
    });
    const component = new ComponentPortal(
      ListOverlayComponent,
      this.viewContainer,
      injector
    );
    const componentRef: ComponentRef<ListOverlayComponent> =
      this.overlayRef.attach(component);
    this.changeDetector.markForCheck();

    this.subscriptions.push(
      this.overlayRef.outsidePointerEvents().subscribe(() => {
        this.detachAndUnsubscribe();
      })
    );
    this.subscriptions.push(
      componentRef.instance.selectMonth.subscribe((data) => {
        if (typeof data.value === 'string') {
          this.selectMonth.emit(data.index);
        } else {
          this.selectYear.emit(Number(data.value));
        }
        this.detachAndUnsubscribe();
      })
    );
  }

  private detachAndUnsubscribe(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
    this.overlayRef?.detach();
  }

  /*
  This can be enhanced with pre-defined position
  1. Add new Input position with enum: TOP, LEFT, RIGHT, BOTTOM
  2. Then change getPositionStrategy accordingly
  */
  private getPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.element)
      .withPositions([
        {
          originX: 'center',
          originY: 'center',
          overlayX: 'center',
          overlayY: 'top',
          panelClass: 'bottom',
        },
      ]);
  }
}
