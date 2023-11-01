import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutofocusDirective implements AfterViewInit {

  private readonly host = inject(ElementRef);

  public ngAfterViewInit(): void {
    this.host.nativeElement.focus();
  }
}
