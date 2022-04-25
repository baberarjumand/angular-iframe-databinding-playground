import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-main-outer',
  templateUrl: './main-outer.component.html',
  styleUrls: ['./main-outer.component.scss'],
})
export class MainOuterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onEventEmit(event: string) {
    console.log(event);
  }
}
