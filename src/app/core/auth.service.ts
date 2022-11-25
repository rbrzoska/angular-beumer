import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

userData: any = {
  userName: 'Alojzy',
  userId: 123445
}
private _isLoggedInSubj = new BehaviorSubject<boolean>(false);

isLoggedIn$ = this._isLoggedInSubj.asObservable();
get isLoggedIn() {
  return this._isLoggedInSubj.value;
}

  constructor(private _router: Router) {
  }

  logIn() {
    this._isLoggedInSubj.next(true)
  }

  logOut() {
    this._isLoggedInSubj.next(false)
  }
}
