# Building Angular and React Applications Together With Nx

Large companies often use multiple frontend frameworks to build their products. One product can be built with Angular, another one with React. These products, even though are built by different teams using different stacks, often share components and utilities.

Setting this up traditionally is challenging. Companies put a lot of effort in making sure teams can collaborate and use each other's work. Nx drastically simplifies this.

This repository has two applications (one in Angular, and one in React) that will use a library of shared web components.


## Angular Elements Branch

In this branch we show that it is possible to use Angular Elements to build the shared components library.

The implementation of the component itself is straightforward:

```typescript
@Component({
  template: `
    <h1>Welcome to {{title}}!</h1>
  `
})
export class GreetingComponent {
  @Input() title: string;
}

@NgModule({
  imports: [BrowserModule],
  declarations: [GreetingComponent],
  entryComponents: [GreetingComponent],
  bootstrap: []
})
export class UiModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(GreetingComponent, { injector: this.injector });
    customElements.define('happynrwl-greeting', element);
  }
}
```

Making components work in development is straightforward as well. Simply add the following to `apps/reactapp/src/environments/environment.ts`:

```typescript
import '@happynrwl/ui';
```

Now, if you run `ng serve reactapp`, you will see the Angular component rendered inside `reactapp`.

Bundling the components for production deployment is a bit trickier because of the limitation of pre-Ivy Angular CLI. We also have a lot more options here depending on how the elements are distributed in production. The version in this branch shows one way to do it.
