import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ForbiddenEmailValidator } from './forbidden-email.validator';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor(private forbiddenEmailValidator: ForbiddenEmailValidator) {
  }

  get controls(): AbstractControl[] {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, forbiddenNameValidator(/bob/i)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmailValidator.validate.bind(this.forbiddenEmailValidator)]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // this.signupForm.statusChanges.subscribe((status) => console.log(status));
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'Max',
    //     email: 'max@test.com',
    //   },
    //   gender: 'male',
    //   hobbies: [],
    // });
    // this.signupForm.patchValue({
    //   userData: {
    //     username: 'Anna',
    //   },
    // });
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}
