import { Component, Input } from '@angular/core';

@Component({
  template: `
    <h1>Welcome to {{ title }}!</h1>
  `
})
export class GreetingComponent {
  @Input() title: string;
}
