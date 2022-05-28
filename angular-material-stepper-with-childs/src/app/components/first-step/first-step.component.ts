import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css'],
})
export class FirstStepComponent implements OnInit {
  frmStepOne: FormGroup;
  frmStepOne$: Observable<FormGroup>;

  private myFrmStepOne$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepOneListener$: Observable<FormGroup> =
    this.myFrmStepOne$.asObservable();
  myFrmStepOne(form: FormGroup) {
    this.myFrmStepOne$.next(form);
  }

  constructor(private formBuilder: FormBuilder) {
    this.frmStepOne = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.myFrmStepOne(this.frmStepOne);

    this.frmStepOne$ = this.myFrmStepOneListener$.pipe(delay(0));
  }
}
