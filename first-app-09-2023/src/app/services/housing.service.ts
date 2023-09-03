import { Injectable } from '@angular/core';

import { THomeApplication } from '../types/home-application.type';
import { THousingLocation } from '../types/housinglocation.type';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private readonly baseUrl = 'http://localhost:3000/locations';

  public async getAllHousingLocations(): Promise<THousingLocation[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  public async getHousingLocationById(
    id: number,
  ): Promise<THousingLocation | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  public submitApplication({
    firstName,
    lastName,
    email,
  }: THomeApplication): void {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
