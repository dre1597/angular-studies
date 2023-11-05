import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, TranslateModule],
  template: `
    <h2>{{ 'TITLE' | translate }}</h2>
    <label>
      {{ 'SELECT' | translate }}
      <select #langSelect (change)="translateService.use(langSelect.value)">
        <option
            *ngFor="let lang of translateService.getLangs()"
            [value]="lang"
            [selected]="lang === translateService.currentLang"
        >
          {{ lang }}
        </option>
      </select>
    </label>
  `,
  styles: [],
  providers: [TranslateService],
})
export class AppComponent {
  constructor(public readonly translateService: TranslateService) {
    translateService.addLangs(['en', 'pt-br']);
    translateService.setDefaultLang('en');

    const browserLang = translateService.getBrowserLang()!;
    translateService.use(browserLang.match(/en|pt-br/) ? browserLang : 'en');

  }
}
