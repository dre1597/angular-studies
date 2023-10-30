import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordStrength'
})
export class PasswordStrengthPipe implements PipeTransform {
  transform(password: string): string {
    if (!password) return '';

    if (password.length < 6) {
      return 'Weak';
    } else if (password.length < 10) {
      return 'Medium';
    }
    return 'Strong';
  }
}
