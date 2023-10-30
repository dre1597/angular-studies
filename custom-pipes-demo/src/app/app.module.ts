import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UppercaseFirstPipe } from './pipes/uppercase-first.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { SortArrayPipe } from './pipes/sort-array.pipe';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';
import { PhoneNumberFormatterPipe } from './pipes/phone-number-formatter.pipe';
import { PhoneNumberFormatterUsPipe } from './pipes/phone-number-formatter-us.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { MarkdownToHtmlPipe } from './pipes/markdown-to-html.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { PercentChangePipe } from './pipes/percent-change.pipe';
import { InitialsPipe } from './pipes/initials-pipe.pipe';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { CamelCaseToSpacesPipe } from './pipes/camel-case-to-spaces.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { MaskedInputPipe } from './pipes/masked-input.pipe';
import { FormsModule } from '@angular/forms';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { HumanizeDurationPipe } from './pipes/humanize-duration.pipe';
import { JsonPrettyPrintPipe } from './pipes/json-pretty-print.pipe';
import { PasswordStrengthPipe } from './pipes/password-strength.pipe';
import { OrdinalNumberPipe } from './pipes/ordinal-number.pipe';
import { UrlifyPipe } from './pipes/urlify.pipe';
import { ArrayShufflePipe } from './pipes/array-shuffle.pipe';
import { ColorContrastPipe } from './pipes/color-contrast.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseFirstPipe,
    ReverseStringPipe,
    FilterArrayPipe,
    TruncateTextPipe,
    SortArrayPipe,
    CurrencyConverterPipe,
    PhoneNumberFormatterPipe,
    PhoneNumberFormatterUsPipe,
    FileSizePipe,
    MarkdownToHtmlPipe,
    TimeAgoPipe,
    PercentChangePipe,
    InitialsPipe,
    StripHtmlTagsPipe,
    CamelCaseToSpacesPipe,
    TitleCasePipe,
    MaskedInputPipe,
    PluralizePipe,
    HumanizeDurationPipe,
    JsonPrettyPrintPipe,
    PasswordStrengthPipe,
    OrdinalNumberPipe,
    UrlifyPipe,
    ArrayShufflePipe,
    ColorContrastPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
