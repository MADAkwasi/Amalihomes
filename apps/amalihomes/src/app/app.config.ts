import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { applicationReducer, ApplicationStore } from './logic/stores';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoryblokEffects } from './logic/stores/effects/storyblok-effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore<ApplicationStore>(applicationReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([StoryblokEffects]),
  ],
};
