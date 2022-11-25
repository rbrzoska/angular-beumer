import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    TestPipe
  ],
  exports: [
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
