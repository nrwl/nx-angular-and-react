import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UiModule } from './lib/ui.module';

platformBrowserDynamic()
  .bootstrapModule(UiModule)
  .catch(err => console.error(err));
