import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from './user.model';

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
  user = new BehaviorSubject<User>(null);

  private _tokenExpirationTimer: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

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
    }), tap((res) =>
      this.handleAuthentication(res.localId, res.email, res.idToken, +res.expiresIn)
    ));
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
    }), tap(res =>
      this.handleAuthentication(res.localId, res.email, res.idToken, +res.expiresIn)
    ));
  }

  autoLogin(): void {
    const userData: {
      id: string;
      email: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.id, userData.email, userData._token, new Date(userData._tokenExpirationDate));

    if (loadedUser.token) {
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.authLogout(expirationDuration);
      this.user.next(loadedUser);
    }
  }

  logout(): void {
    this.user.next(null);
    localStorage.removeItem('userData');
    if (this._tokenExpirationTimer) {
      clearTimeout(this._tokenExpirationTimer);
    }
    this._tokenExpirationTimer = null;
    this.router.navigate(['/auth']);
  }

  authLogout(expirationDuration: number) {
    this._tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(userId: string, email: string, token: string, expiresIn: number): void {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(userId, email, token, expirationDate);
    this.user.next(user);
    this.authLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
