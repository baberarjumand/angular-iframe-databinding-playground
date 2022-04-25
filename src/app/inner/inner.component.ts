import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
})
export class InnerComponent implements OnInit {
  counter = 0;
  counterNum: number | undefined;

  @Output() eventEmit = new EventEmitter<string>();

  constructor(private ref: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.counterNum = Number.parseInt(params['counter']);
    });

    window.parent.addEventListener('message', (event) => {
      const obj = JSON.parse(event.data);

      if (
        obj.hasOwnProperty('counterNum') &&
        obj.counterNum === this.counterNum
      ) {
        if (obj.op === 'increment') {
          this.counter++;
          this.ref.detectChanges();
        }
        if (obj.op === 'reset') {
          this.counter = 0;
          this.ref.detectChanges();
        }
      }
    });
  }

  incrementCounter() {
    this.counter++;

    // emit event using regular Angular logic
    // this.eventEmit.emit(`New counter value: ${this.counter}`);

    // emit event using postMessage
    // window.parent.postMessage(`New counter value: ${this.counter}`, '*');
    const obj = {
      msg: `New Counter #${this.counterNum} value: ${this.counter}`,
    };
    window.parent.postMessage(JSON.stringify(obj), '*');
  }
}
