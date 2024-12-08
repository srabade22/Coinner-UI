// main.server.ts
import { platformServer } from '@angular/platform-server';
import { AppModule } from './app/app.module'; // Import AppModule for SSR

export function bootstrap() {
  platformServer()
    .bootstrapModule(AppModule) // Use AppModule for SSR
    .catch((err) => console.error(err));
}
