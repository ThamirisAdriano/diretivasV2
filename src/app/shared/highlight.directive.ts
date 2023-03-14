import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.currentColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string ="";

  @Input() defaultColor: string='white'
  @Input() currentColor: string='yellow'
    
  

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
