import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, Subject } from 'rxjs';

import { TTestTokenResponse, TTokenResponse } from './responses';
import { ApiError } from './api-error';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public token = new Subject<string>();

  private readonly baseUrl = 'http://localhost:3000';
  private readonly http = inject(HttpClient);

  public login(): Observable<TTokenResponse> {
    return this.http
      .get<TTokenResponse>(`${this.baseUrl}/token`)
      .pipe(
        catchError(this.catchError),
      );
  }

  public testToken(): Observable<TTestTokenResponse> {
    return this.http
      .get<TTestTokenResponse>(`${this.baseUrl}/verify`)
      .pipe(
        catchError(this.catchError),
      );
  }

  private catchError(
    error: HttpErrorResponse,
  ): never {
    throw new ApiError({
      message: error.message,
      status: error.status,
    });
  }
}
