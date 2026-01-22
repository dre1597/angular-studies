import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfCnpjValidator } from './helpers/cpf-cnpj.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      cpf: ['', [Validators.required, CpfCnpjValidator.validate]],
      cnpj: ['', [Validators.required, CpfCnpjValidator.validate]]
    });
  }

}
