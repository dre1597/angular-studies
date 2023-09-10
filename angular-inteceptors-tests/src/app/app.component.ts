import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { ApiService } from './api.service';
import { TokenInterceptor } from './token.interceptor';
import { TTestTokenResponse, TTokenResponse } from './responses';
import { handleApiError } from './api-error';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <p>Token: {{ token }}</p>
    <button type="button" (click)="login()">Login</button>
    <button type="button" (click)="testToken()">Test token</button>
  `,
  imports: [RouterOutlet, AsyncPipe],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  protected token = '';
  private readonly apiService = inject(ApiService);
  private subscriptions: Subscription[] = [];

  public ngOnInit(): void {
    const subscription = this.apiService.token.subscribe({
      next: (token: string): void => {
        this.token = token;
        localStorage.setItem('token', token);
      },
      error: (error): void => {
        console.error(error);
      },
    });

    this.subscriptions.push(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  protected login(): void {
    const subscription = this.apiService.login().subscribe({
      next: (response: TTokenResponse): void => {
        if (response.token) {
          this.token = response.token;
        }
      },
      error: handleApiError,
    });

    this.subscriptions.push(subscription);
  }

  protected testToken(): void {
    const subscription = this.apiService.testToken().subscribe({
      next: (response: TTestTokenResponse): void => {
        if (response.message) {
          alert(response.message);
        }
      },
      error: handleApiError,
    });

    this.subscriptions.push(subscription);
  }
}
