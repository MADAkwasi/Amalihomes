import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { applicationReducer } from './logic/stores';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoryblokEffects } from './logic/stores/effects/storyblok-effects';
import { provideEffects } from '@ngrx/effects';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationStore } from './logic/interfaces/app';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore<ApplicationStore>(applicationReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([StoryblokEffects]),
    provideHttpClient(withFetch()),
  ],
};
