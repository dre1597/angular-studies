import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    if (this.isLoginMode) {
      // TODO: login logic
    } else {
      const email = form.value.email;
      const password = form.value.password;

      this.isLoading = true;

      this.authService.signup(email, password).subscribe({
        next: (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        error: (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      });
    }


    form.reset();
  }
}
