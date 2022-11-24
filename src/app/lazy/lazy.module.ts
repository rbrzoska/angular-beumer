import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyTestComponent } from './lazy-test/lazy-test.component';


@NgModule({
  declarations: [
    LazyTestComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export default class LazyModule { }
