import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  canActivate(currentUser: string): boolean {
    return false;
  }

  canMatch(currentUser: string): boolean {
    return true;
  }
}
