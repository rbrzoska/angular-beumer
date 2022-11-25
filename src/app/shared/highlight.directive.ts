import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[beHighlight]'
})
export class HighlightDirective {

  @Input() beHighlight!: string;
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  @HostListener('mouseover')
  handleMouseOver() {
   this._renderer.addClass(this._el.nativeElement, this.beHighlight || 'highlight')
  }

  @HostListener('mouseout')
  handleMouseOut() {
   this._renderer.removeClass(this._el.nativeElement, this.beHighlight || 'highlight')
  }

}
