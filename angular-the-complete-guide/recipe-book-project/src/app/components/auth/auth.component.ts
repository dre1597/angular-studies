import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  private _subscriptions: Subscription[] = []

  constructor(private authService: AuthService) {}


  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    let auth$: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      auth$ = this.authService.login(email, password);
    } else {
      auth$ = this.authService.signup(email, password);
    }

    const authSubscription = auth$.subscribe({
      next: (resData) => {
        console.log(resData);
        this.isLoading = false;
      },
      error: (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    });

    this._subscriptions.push(authSubscription);

    form.reset();
  }
}
