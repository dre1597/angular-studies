import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApiService } from './api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

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
export class AppComponent implements OnInit {
  protected token = '';
  private readonly apiService = inject(ApiService);

  public ngOnInit() {
    this.apiService.token.subscribe({
      next: (token) => {
        this.token = token;
        localStorage.setItem('token', token);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  protected login(): void {
    this.apiService.login().subscribe({
      next: (response) => {
        this.apiService.token.next(response.token);
      },
      error: (error) => {
        alert(error?.message);
      },
    });
  }

  protected testToken(): void {
    this.apiService.testToken().subscribe({
      next: (response) => {
        alert(response.message);
      },
      error: (error) => {
        alert(error?.message);
      },
    });
  }
}
