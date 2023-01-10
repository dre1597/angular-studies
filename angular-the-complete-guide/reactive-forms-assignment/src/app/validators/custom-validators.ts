import { FormControl } from '@angular/forms';

export class CustomValidators {
  static invalidName(control: FormControl): { [v: string]: boolean } {
    return control.value === 'name' ? {'invalidName': true} : null;
  }

  static asyncInvalidName(control: FormControl): Promise<{ [v: string]: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        control.value === 'project' ? resolve({'invalidName': true}) : resolve(null);
      }, 1000);
    });
  }
}
