import { Component, ViewChild } from '@angular/core';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mat-stepper';

  @ViewChild('stepOne') stepOneComponent: FirstStepComponent;
  @ViewChild('stepTwo') stepTwoComponent: SecondStepComponent;

  get frmStepOne() {
    return this.stepOneComponent ? this.stepOneComponent.frmStepOne$ : null;
  }

  get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo$ : null;
  }
}
