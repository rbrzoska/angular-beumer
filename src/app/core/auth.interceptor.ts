import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this._auth.isLoggedIn) {
      const newReq = request.clone({ setHeaders: { Authorization: 'Bearer jdsfhiuwhfyuewiuffiusafdsgfhes' } });
      return next.handle(newReq)
    }
    return next.handle(request);
  }
}
