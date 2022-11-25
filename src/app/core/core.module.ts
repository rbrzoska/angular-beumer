import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';

const authFactory = (router: Router) => new AuthService(router)

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    // { provide: AuthServise, useClass: AuthService }
    // { provide: AuthService, useFactory: authFactory, deps: [Router] }
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
