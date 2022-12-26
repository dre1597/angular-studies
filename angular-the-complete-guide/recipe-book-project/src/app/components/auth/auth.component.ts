import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;

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

      this.authService.signup(email, password).subscribe({
        next: (resData) => {console.log(resData);},
        error: (error) => {console.log(error);}
      });
    }


    form.reset();
  }
}
