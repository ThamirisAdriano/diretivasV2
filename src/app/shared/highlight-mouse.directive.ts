import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'purple'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  private backgroundColor: string=""

  constructor() { }

}
