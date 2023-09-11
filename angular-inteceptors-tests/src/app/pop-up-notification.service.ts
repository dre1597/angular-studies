import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpNotificationService {
  public error(message: string): void {
    alert(message);
  }
}
