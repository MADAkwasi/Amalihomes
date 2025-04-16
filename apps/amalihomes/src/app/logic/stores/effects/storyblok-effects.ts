import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { StoryblokService } from '../../services/storyblok/storyblok.service';
import { StoryblokPageActions } from '../actions/storyblok.actions';
import { LocalizationService } from '../../services/localization/localization.service';
import { Store } from '@ngrx/store';
import { selectLocale } from '../selectors/storyblok.selectors';

@Injectable()
export class StoryblokEffects {
  private readonly actions$ = inject(Actions);
  private readonly storyblokService = inject(StoryblokService);
  private readonly localizationService = inject(LocalizationService);
  private readonly store = inject(Store);
  private readonly selectedLocale = this.store.selectSignal(selectLocale);

  loadStoryblokPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoryblokPageActions.loadPage),
      switchMap(({ slug, language, version }) =>
        this.localizationService.getUserLocale().pipe(
          switchMap((locale) => {
            if (locale?.languageCode) {
              this.store.dispatch(
                StoryblokPageActions.loadUserLocaleSuccess({ locale: this.selectedLocale() ?? locale }),
              );
            }

            const langCode = this.selectedLocale()?.languageCode ?? language;

            return this.storyblokService.getStoryblokPage(slug, langCode, version).pipe(
              map((story) => StoryblokPageActions.loadPageSuccess({ story: story.data.story })),
              catchError((error) => of(StoryblokPageActions.loadPageFailure({ error }))),
            );
          }),
          catchError((error) => {
            return of(StoryblokPageActions.loadPageFailure({ error }));
          }),
        ),
      ),
    ),
  );
}
