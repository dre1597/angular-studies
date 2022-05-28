import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, delay, Observable } from 'rxjs';

@Component({
  selector: 'app-opening-information-form',
  templateUrl: './opening-information-form.component.html',
  styleUrls: ['./opening-information-form.component.css'],
})
export class OpeningInformationFormComponent implements OnInit {
  openingInformationForm: FormGroup;
  openingInformationFormObservable: Observable<FormGroup>;

  private openingInformationFormBehaviorSubject =
    new BehaviorSubject<FormGroup>(null);
  openingInformationFormListener: Observable<FormGroup> =
    this.openingInformationFormBehaviorSubject.asObservable();

  formPedidoEnderecoMethod(form: FormGroup) {
    this.openingInformationFormBehaviorSubject.next(form);
  }

  constructor(private formBuilder: FormBuilder) {
    this.openingInformationForm = this.formBuilder.group({
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formPedidoEnderecoMethod(this.openingInformationForm);

    this.openingInformationFormObservable =
      this.openingInformationFormListener.pipe(delay(0));
  }
}
