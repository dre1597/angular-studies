import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';

export class CpfValidator implements Validator {
  static validate(control: AbstractControl): ValidationErrors | null {
    return !cpf.isValid(control.value) ? { cpf: true } : null;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return CpfValidator.validate(control);
  }
}
