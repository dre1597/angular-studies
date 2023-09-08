import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, Subject } from 'rxjs';
import { THTTPResponse, TTestTokenResponse, TTokenResponse } from './responses';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public token = new Subject<string>();

  private readonly baseUrl = 'http://localhost:3000';
  private readonly http = inject(HttpClient);

  public login(): Observable<THTTPResponse<TTokenResponse>> {
    return this.http
      .get<TTokenResponse>(`${this.baseUrl}/token`)
      .pipe(
        map(this.mapResponse<TTokenResponse>),
        catchError(this.catchError<TTokenResponse>),
      );
  }

  public testToken(): Observable<THTTPResponse<TTestTokenResponse>> {
    return this.http
      .get<TTestTokenResponse>(`${this.baseUrl}/verify`)
      .pipe(
        map(this.mapResponse<TTestTokenResponse>),
        catchError(this.catchError<TTestTokenResponse>),
      );
  }

  private mapResponse<T>(response: T): THTTPResponse<T> {
    return {
      data: response,
      error: null,
    };
  }

  private catchError<T>(
    error: HttpErrorResponse,
  ): Observable<THTTPResponse<T>> {
    return of({
      error: {
        message: error.message,
        status: error.status,
        statusText: error.statusText,
      },
      data: null,
    });
  }
}
