import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'be-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-beumer';
  ngOnInit(): void {

  //   setInterval(() => {
  //   console.log('timeout')
  // }, 2000)

  }

  handleHomeOutput(data: string) {
    console.time('outputHandler')
    console.timeEnd('outputHandler')
  }
}
