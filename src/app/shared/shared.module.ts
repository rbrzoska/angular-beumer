import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    TestPipe,
    TestDirective,
    HighlightDirective
  ],
  exports: [
    TestPipe,
    TestDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
