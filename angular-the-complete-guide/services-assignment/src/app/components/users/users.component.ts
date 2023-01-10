import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  template: `<h3>{{ isActive ? "Active" : "Inactive" }} Users</h3>
  <ul class="list-group">
    <li class="list-group-item" *ngFor="let user of users; let i = index">
      {{ user }} |
      <a href="#" (click)="isActive ? onSetToInactive(i) : onSetToActive(i)">{{
        isActive ? "Inactive" : "Active"
        }}</a>
    </li>
  </ul>
  `
})
export class UsersComponent implements OnInit {
  users: string[];
  @Input('isActive') isActive: boolean;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    if (this.isActive) {
      this.users = this.userService.activeUsers;
    } else {
      this.users = this.userService.inactiveUsers;
    }
  }

  onSetToActive(id: number): void {
    this.userService.setToActive(id);
  }

  onSetToInactive(id: number): void {
    this.userService.setToInactive(id);
  }
}
