import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTemplateHost]'
})
export class TemplateHostDirective {
  private hostElement: HTMLElement;

  @Input('appTemplateHost') set templateHtml(value) {
    this.hostElement.innerHTML = value;
  }

  constructor(elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
  }

}
