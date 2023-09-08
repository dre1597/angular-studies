import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export type TTokenResponse = {
  token: string;
};

export type TTestTokenResponse = {
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public token = new Subject<string>();

  private readonly baseUrl = 'http://localhost:3000';
  private readonly http = inject(HttpClient);

  public login(): Observable<TTokenResponse> {
    return this.http.get<TTokenResponse>(`${this.baseUrl}/token`);
  }

  public testToken(): Observable<TTestTokenResponse> {
    return this.http.get<TTestTokenResponse>(`${this.baseUrl}/verify`);
  }
}
