import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-outer',
  templateUrl: './main-outer.component.html',
  styleUrls: ['./main-outer.component.scss'],
})
export class MainOuterComponent implements OnInit {
  constructor() {}

  @HostListener('window:message', ['$event'])
  onMessage(event: any) {
    if (typeof event === 'object' && event.data['data'] !== undefined) {
      const obj = JSON.parse(event.data);
      if (obj.hasOwnProperty('msg')) {
        console.log(obj['msg']);
      }
    }
  }

  ngOnInit(): void {
    // window.addEventListener('message', (event) => {
    //   if (typeof event === 'object') {
    //     const obj = JSON.parse(event.data);
    //     if (obj.hasOwnProperty('msg')) {
    //       console.log(obj['msg']);
    //     }
    //   }
    // });
  }

  // onEventEmit(event: string | any) {
  //   console.log(event);
  // }

  onReset(counterNum: number) {
    const obj = {
      counterNum: counterNum,
      op: 'reset',
    };
    window.postMessage(JSON.stringify(obj), '*');
  }

  onIncrement(counterNum: number) {
    const obj = {
      counterNum: counterNum,
      op: 'increment',
    };
    window.postMessage(JSON.stringify(obj), '*');
  }
}
