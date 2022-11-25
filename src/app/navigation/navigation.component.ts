import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'be-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isLoggedIn$!: Observable<boolean>;

  constructor(private _auth: AuthService) {
    this.isLoggedIn$ = _auth.isLoggedIn$;
  }
  handleLogin() {
    this._auth.logIn();
  }
  handleLogout() {
    this._auth.logOut();
  }
}
