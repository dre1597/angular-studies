import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export type AuthResponseData = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
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
    }).pipe(catchError((e) => {
      let errorMessage = 'An unknown error occured!';

      if (!e?.error?.error) {
        throw errorMessage;
      }

      switch (e.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already!';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          errorMessage = 'Too many attempts, try later!';
          break;
      }

      throw(errorMessage);
    }));
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.httpClient.post<AuthResponseData>(`${environment.signInUrl}`, {
      email,
      password,
      returnSecureToken: true,
    }).pipe(catchError((e) => {
      let errorMessage = 'An unknown error occured!';

      if (!e?.error?.error) {
        throw errorMessage;
      }

      switch (e.error.error.message) {
        case 'EMAIL_NOT_FOUND':
        case 'INVALID_PASSWORD':
          errorMessage = 'Incorrect email or password!';
          break;
        case 'USER_DISABLED':
          errorMessage = 'This user has been disabled by an administrador';
          break;
      }

      throw(errorMessage);
    }));
  }
}
