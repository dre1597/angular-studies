import { Component, inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
  standalone: true,
})
export class AppComponent {
  carService = inject(CarService);
}


@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
