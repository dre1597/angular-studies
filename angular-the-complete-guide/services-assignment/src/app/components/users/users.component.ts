import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
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

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
