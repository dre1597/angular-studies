import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

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
    }).pipe(catchError((e) => {
      let errorMessage = 'An unknown error occured!';

      if (!e?.error?.error) {
        throw errorMessage;
      }

      switch (e.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already!';
      }

      throw(errorMessage);
    }));
  }
}
