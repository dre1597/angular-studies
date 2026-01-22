import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello Angular</h1>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  callPromise(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!name.trim()) {
        reject('Ops! Please enter your name');
      }

      setTimeout(() => {
        resolve(`Hello ${name}`);
      }, 1000);
    });
  }

  callObservable(name: string): Observable<string> {
    return new Observable((subscriber) => {
      if (!name.trim()) {
        subscriber.error('Ops! Please enter your name');
      }
      subscriber.next(`Hello ${name}`);

      setTimeout(() => {
        subscriber.next(`Hello ${name}`);
        subscriber.complete();
      });
    });
  }

  ngOnInit(): void {
    this.callPromise('any name').then(res => console.log(res));
    this.callPromise('').then(res => console.log(res)).catch(err => console.log(err));

    this.callObservable('any_name').subscribe({
      next: result => console.log(result),
      error: err => console.log(err),
      complete: () => console.log('complete')
    });
    this.callObservable('').subscribe({
      next: result => console.log(result),
      error: err => console.log(err)
    });
  }
}
