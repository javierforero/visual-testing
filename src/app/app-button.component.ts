import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>Hello</button>
  `,
  styles: [
      `
      div {
      }
    `,
  ],
})
export class AppButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
