import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { CpfValidator } from '../../@shared/validator/cpf.validator';
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from './generic-form-validation';
import { User } from './models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];

  signupForm!: FormGroup;
  user?: User;
  validationMessages!: ValidationMessages;
  genericValidator!: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private formBuilder: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'Name is required',
        minlength: 'Name need a least 3 characters',
        maxlength: 'Name need less than 150 characters',
      },
      cpf: {
        required: 'Cpf is required',
        cpf: 'Invalid cpf',
      },
      email: {
        required: 'Email is required',
        email: 'Invalid email',
      },
      password: {
        required: 'Password is required',
        minlength: 'Password need a least 6 characters',
        maxlength: 'Password need less than 15 characters',
      },
      confirmPassword: {
        required: 'Confirm password is required',
        minlength: 'Password need a least 6 characters',
        maxlength: 'Password need less than 15 characters',
        equalTo: 'Password and confirme password need to be the same',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    const passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]);

    const confirmPasswordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      CustomValidators.equalTo(passwordControl),
    ]);

    this.signupForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      cpf: ['', [Validators.required, CpfValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: passwordControl,
      confirmPassword: confirmPasswordControl,
    });
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(
        this.signupForm
      );
    });
  }

  submit(): void {
    if (!this.signupForm.dirty || !this.signupForm.valid) {
      return;
    }

    this.user = { ...this.signupForm.value };
  }
}
