import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'be-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isLoggedIn$!: boolean;

  constructor(private _auth: AuthService) {
    _auth.isLoggedIn$.subscribe((v: boolean) => this.isLoggedIn = v)
  }
  handleLogin() {
    this._auth.logIn();
  }
  handleLogout() {
    this._auth.logOut();
  }
}
