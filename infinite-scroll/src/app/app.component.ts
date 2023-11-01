import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';

import { ProductsApiService } from './products-api.service';
import { ProductsPaginator } from './models';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="my-4">Products</h1>
      <div class="products-list"
           *ngIf="paginator$ | async as paginator"
           infiniteScroll
           [infiniteScrollDistance]="2"
           [infiniteScrollThrottle]="50"
           (scrolled)="loadMoreProducts(paginator)">
        <div class="row gy-4">
          <div class="col-12 col-md-6 col-lg-4 col-xl-3" *ngFor="let product of paginator.items">
            <div class="card product-card">
              <div class="card-img-top">
                <img [src]="product.thumbnail" [alt]="product.title">
              </div>
              <div class="card-body">
                <h2 class="h5 text-truncate">{{ product.title }}</h2>
                <p class="mb-4">\${{ product.price }}</p>
                <button class="btn btn-primary w-100">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center my-3" *ngIf="!paginator.hasMorePages">You have reached the end of catalog.</p>
      </div>

      <p class="text-center my-3" *ngIf="loading$ | async">Loading...</p>
    </div>
  `,
  styles: []
})
export class AppComponent {
  public paginator$: Observable<ProductsPaginator>;
  public loading$ = new BehaviorSubject(true);

  private readonly api = inject(ProductsApiService);
  private page$ = new BehaviorSubject(1);

  constructor() {
    this.paginator$ = this.loadProducts$();
  }

  protected loadMoreProducts(paginator: ProductsPaginator) {
    if (!paginator.hasMorePages) {
      return;
    }
    this.page$.next(paginator.page + 1);
  }

  private loadProducts$(): Observable<ProductsPaginator> {
    return this.page$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap((page) => this.api.getProducts$(page)),
      scan(this.updatePaginator, { items: [], page: 0, hasMorePages: true } as ProductsPaginator),
      tap(() => this.loading$.next(false)),
    );
  }

  private updatePaginator(accumulator: ProductsPaginator, value: ProductsPaginator): ProductsPaginator {
    if (value.page === 1) {
      return value;
    }

    accumulator.items.push(...value.items);
    accumulator.page = value.page;
    accumulator.hasMorePages = value.hasMorePages;

    return accumulator;
  }
}
