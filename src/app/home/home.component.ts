import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'be-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
 @Input() homeInput = 'initValue';
 @Output() homeOutput = new EventEmitter<string>()

  title = 'Home component';
  myStyle="background: blue"

  handleClick(event: Event) {
     console.log(event)
     this.homeOutput.emit('I am from home component')
     import('../configs/api.config.json').then(v => console.log(v))
  }
}
