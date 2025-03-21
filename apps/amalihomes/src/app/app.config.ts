import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { ApplicationStore } from './logic/stores';
import { applicationImageDataReducers } from './logic/stores/reducers/image-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore<ApplicationStore>({
      'image-data': applicationImageDataReducers,
    }),
  ],
};
