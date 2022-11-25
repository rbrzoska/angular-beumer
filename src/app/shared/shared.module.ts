import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';
import { ForLoggedInUserDirective } from './for-logged-in-user.directive';
import { CustomControlComponent } from './custom-control/custom-control.component';

@NgModule({
  declarations: [
    TestPipe,
    TestDirective,
    HighlightDirective,
    ForLoggedInUserDirective,
    CustomControlComponent
  ],
  exports: [
    TestPipe,
    TestDirective,
    HighlightDirective,
    ForLoggedInUserDirective,
    CustomControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
