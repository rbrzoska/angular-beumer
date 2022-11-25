import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';
import { ForLoggedInUserDirective } from './for-logged-in-user.directive';

@NgModule({
  declarations: [
    TestPipe,
    TestDirective,
    HighlightDirective,
    ForLoggedInUserDirective
  ],
  exports: [
    TestPipe,
    TestDirective,
    HighlightDirective,
    ForLoggedInUserDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
