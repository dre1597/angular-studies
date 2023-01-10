import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  @ViewChild('f', {static: false}) form: NgForm;

  email: string = '';
  password: string = '';

  subcription: string[] = ['advanced'];

  onSubmit(): void {
    console.log(this.form.value);
  }
}
