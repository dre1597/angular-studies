import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ForbiddenEmailValidator implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      map(value => value === 'test@test.com' ? {'emailIsForbidden': true} : null),
      delay(1500)
    );
  }
}
