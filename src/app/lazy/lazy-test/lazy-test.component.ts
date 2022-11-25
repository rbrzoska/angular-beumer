import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { pairwise, ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { filter, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'be-lazy-test',
  templateUrl: './lazy-test.component.html',
  styleUrls: ['./lazy-test.component.scss']
})
export class LazyTestComponent implements OnInit {
  @ViewChild('myInput', { static: true }) myInput!: ElementRef<HTMLInputElement>

  promiseHTTP = new Promise<string>(( resolve, reject ) => {
    setTimeout(() => {
      resolve('result')
    }, 2000)
  })

  // obs =  new Observable((obs) => {
  //   setTimeout(() => {
  //     obs.next('start')
  //   }, 1000)
  //   setTimeout(() => {
  //     obs.error('ERROR!!!!')
  //   }, 1500)
  //   setTimeout(() => {
  //     obs.next('end');
  //     obs.complete();
  //   }, 2000)
  // })

// obs = of(1, 2, 3).pipe(
//   filter((v: number) => v > 2),
//   map((v: number) => v * 2)
//   )

obs!: Observable<any>;
subj = new Subject();
bSubj = new BehaviorSubject('a');
rSubj = new ReplaySubject(2)

  constructor() {
    //this.promiseHTTP.then((v: string) => console.log(v))
  }

  ngOnInit(): void {
    this.obs = fromEvent(this.myInput.nativeElement, 'input')
    this.obs.pipe(map((v: any) => v.data)).subscribe(console.log);


    // this.subj.next(1)
    // this.subj.subscribe(console.log)
    // this.subj.next(2);

    console.log(this.bSubj.value)
    this.bSubj.subscribe(console.log)

    this.rSubj.next(1)
    this.rSubj.next(2)
    this.rSubj.next(3); 
    
    this.rSubj.next(5);
    
    this.rSubj.pipe(pairwise()).subscribe(console.log)
  }

}
