import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css'],
})
export class SecondStepComponent implements OnInit {
  frmStepTwo: FormGroup;
  frmStepTwo$: Observable<FormGroup>;

  private myFrmStepTwo$ = new BehaviorSubject<FormGroup>(null);
  myFrmStepTwoListener$: Observable<FormGroup> =
    this.myFrmStepTwo$.asObservable();
  myFrmStepTwo(form: FormGroup) {
    this.myFrmStepTwo$.next(form);
  }

  constructor(private formBuilder: FormBuilder) {
    this.frmStepTwo = this.formBuilder.group({
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.myFrmStepTwo(this.frmStepTwo);

    this.frmStepTwo$ = this.myFrmStepTwoListener$.pipe(delay(0));
  }
}
