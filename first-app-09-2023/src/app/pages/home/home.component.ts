import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { THousingLocation } from '../../types/housinglocation.type';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  protected housingLocationList: THousingLocation[] = [];
  protected filteredLocationList: THousingLocation[] = [];
  private readonly housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: THousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  protected filterResults(text: string): void {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
