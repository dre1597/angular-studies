import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activeUsers: string[] = ['user1', 'user2'];
  inactiveUsers: string[] = ['user3', 'user4'];

  constructor(private counterService: CounterService) {}

  setToActive(id: number): void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();
  }

  setToInactive(id: number): void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
