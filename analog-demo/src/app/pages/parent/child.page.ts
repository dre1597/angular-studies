import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';


export const routeMeta: RouteMeta = {
  canActivate: [() => new Promise(resolve => setTimeout(() => resolve(true), 3000))], //simulates a server call
};

@Component({
  selector: 'app-parent-child',
  standalone: true,
  template: `
    <h1>Child Route</h1>
  `
})
export default class ChildPageComponent {}
