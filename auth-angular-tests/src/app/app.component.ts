import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './api.service';
import { TokenInterceptor } from './token.interceptor';
import { Subscription } from 'rxjs';
import { THTTPResponse, TTestTokenResponse, TTokenResponse } from './responses';

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
      next: (response: THTTPResponse<TTokenResponse>): void => {
        if (response.error) {
          alert(response.error.message);
          return;
        }

        if (response.data) {
          this.token = response.data.token;
        }
      },
    });

    this.subscriptions.push(subscription);
  }

  protected testToken(): void {
    const subscription = this.apiService.testToken().subscribe({
      next: (response: THTTPResponse<TTestTokenResponse>): void => {
        if (response.error) {
          alert(response.error.message);
          return;
        }

        if (response.data) {
          alert(response.data.message);
        }
      },
    });

    this.subscriptions.push(subscription);
  }
}
