import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'be-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private _auth: AuthService) {
  }
  handleLogin() {
    this._auth.toggle();
  }
}
