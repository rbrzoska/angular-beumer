import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[beForLoggedInUser]'
})
export class ForLoggedInUserDirective {

  constructor(private _auth: AuthService, private temp: TemplateRef<any>, private vcr: ViewContainerRef) {
    this._auth.isLoggedIn$.subscribe(isLoggedIn => {

      this.vcr.clear();
      if( isLoggedIn) {
        this.vcr.createEmbeddedView(temp, {
          $implicit: _auth.userData.userName,
          id: _auth.userData.userId
        })
      }
    })

    //this.vcr.createEmbeddedView(temp)
 }

}
