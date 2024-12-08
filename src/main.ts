// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Import AppModule for client-side
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode(); // If you're in production, enable production mode
}

platformBrowserDynamic()
  .bootstrapModule(AppModule) // Use AppModule for client-side
  .catch((err) => console.error(err));
