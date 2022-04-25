import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
})
export class InnerComponent implements OnInit {
  counter = 0;

  @Output() eventEmit = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  incrementCounter() {
    this.counter++;
    this.eventEmit.emit(`New counter value: ${this.counter}`);
  }
}
