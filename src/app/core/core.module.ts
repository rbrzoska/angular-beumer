import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

const authFactory = (router: Router) => new AuthService(router)

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
    // { provide: AuthServise, useClass: AuthService }
    // { provide: AuthService, useFactory: authFactory, deps: [Router] }
  ]
})
export class CoreModule { }
