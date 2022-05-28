import { Component, ViewChild } from '@angular/core';

import { OpeningInformationFormComponent } from './opening-information-form/opening-information-form.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
})
export class MultiStepFormComponent {
  @ViewChild('formStepOne')
  personalInformationStep: PersonalInformationFormComponent;

  @ViewChild('formStepTwo')
  openingInformationStep: OpeningInformationFormComponent;

  get formStepOneControl() {
    return this.personalInformationStep
      ? this.personalInformationStep.personalInformationFormObservable
      : null;
  }

  get formStepTwoControl() {
    return this.openingInformationStep
      ? this.openingInformationStep.openingInformationFormObservable
      : null;
  }
}
