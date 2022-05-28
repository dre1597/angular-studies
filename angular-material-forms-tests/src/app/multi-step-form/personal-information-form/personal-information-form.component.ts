import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, delay, Observable } from 'rxjs';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css'],
})
export class PersonalInformationFormComponent implements OnInit {
  personalInformationForm: FormGroup;
  personalInformationFormObservable: Observable<FormGroup>;

  private personalInformationFormBehaviorSubject =
    new BehaviorSubject<FormGroup>(null);
  personalInformationFormListener: Observable<FormGroup> =
    this.personalInformationFormBehaviorSubject.asObservable();

  formPedidoEnderecoMethod(form: FormGroup) {
    this.personalInformationFormBehaviorSubject.next(form);
  }

  constructor(private formBuilder: FormBuilder) {
    this.personalInformationForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formPedidoEnderecoMethod(this.personalInformationForm);

    this.personalInformationFormObservable =
      this.personalInformationFormListener.pipe(delay(0));
  }
}
