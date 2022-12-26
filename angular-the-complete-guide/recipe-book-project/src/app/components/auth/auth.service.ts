import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.httpClient.post<AuthResponseData>(`${environment.signUpUrl}`, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
