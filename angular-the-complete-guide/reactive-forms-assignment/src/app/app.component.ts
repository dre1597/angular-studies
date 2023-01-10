import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './validators/custom-validators';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSave()" [formGroup]="form">
      <label for="name">Name</label>
      <input formControlName="name" id="name"/>

      <label for="email">Email</label>
      <input formControlName="email" id="email" type="email"/>

      <label for="status">Status</label>
      <select formControlName="status" id="status">
        <option value="stable">Stable</option>
        <option value="critical">Critical</option>
        <option value="finished">Finished</option>
      </select>

      <button type="submit">Save</button>
    </form>
  `
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this._initForm();
  }

  onSave(): void {
    if (this.form.invalid) {
      console.log('invalid form');
    } else {
      console.log(this.form.value);
    }
  }

  private _initForm(): void {
    this.form = new FormGroup(({
      name: new FormControl('', [Validators.required, CustomValidators.invalidName], CustomValidators.asyncInvalidName),
      email: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl('stable')
    }));
  }
}
