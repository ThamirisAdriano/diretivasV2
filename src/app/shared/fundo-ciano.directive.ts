import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fundoCiano]'
})
export class FundoCianoDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#00FFFF';
   }

}
