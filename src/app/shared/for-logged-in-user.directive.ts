import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[beForLoggedInUser]'
})
export class ForLoggedInUserDirective {

 @Input() beForLoggedInUserDupa!: number

  constructor(private _auth: AuthService, private temp: TemplateRef<any>, private vcr: ViewContainerRef) {
    this._auth.isLoggedIn$.subscribe(isLoggedIn => {

      this.vcr.clear();
      if( isLoggedIn) {
        for(let i = 0; i < this.beForLoggedInUserDupa; i++) {
          this.vcr.createEmbeddedView(temp, {
            $implicit: _auth.userData.userName,
            id: _auth.userData.userId,
            index: i
          })
        }

      }
    })

    //this.vcr.createEmbeddedView(temp)
 }

}
