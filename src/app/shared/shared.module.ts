import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    TestPipe,
    TestDirective
  ],
  exports: [
    TestPipe,
    TestDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
