import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

isLoggedIn = false;

  constructor(private _router: Router) {

    console.log('auth init')
  }

  toggle() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
