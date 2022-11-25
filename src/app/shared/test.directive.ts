import { Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[beTest]'
})
export class TestDirective {

  @Input() beTestBgColor!: string;
  constructor(private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {
  }

  @HostListener('click')
  handleClick() {
    this._renderer.setStyle(this._el.nativeElement, 'backgroundColor', this.beTestBgColor || 'red')
  }

}
