import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [GreetingComponent],
  entryComponents: [GreetingComponent],
  bootstrap: []
})
export class UiModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(GreetingComponent, {
      injector: this.injector
    });
    customElements.define('happynrwl-greeting', element);
  }
}
