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
    MarkdownToHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
