import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, provideEffects } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { StoryblokService } from '../../services/storyblok/storyblok.service';
import { GlobalPageActions } from '../actions/global-page';
import { GlobalPageData, GlobalPageStories } from '../../../types/storyblok/global-page';

@Injectable()
export class GlobalPageEffects {
  private readonly actions$ = inject(Actions);
  private readonly storyBlok = inject(StoryblokService);

  loadGlobalPageData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GlobalPageActions.fetchGlobalData),
      switchMap(({ language }) =>
        from(
          this.storyBlok.getStories<GlobalPageStories>({
            version: this.storyBlok.version,
            language,
            starts_with: 'global/',
          }),
        ).pipe(
          map((data) => {
            return GlobalPageActions.fetchGlobalDataSuccess({
              data: data.stories.reduce(
                (globalPageData, story) => ({ ...globalPageData, [story.slug]: story.content }),
                {} as GlobalPageData,
              ),
            });
          }),
          catchError(() => of(GlobalPageActions.fetchGlobalDataFailure())),
        ),
      ),
    ),
  );
}

export const provideGlobalPageEffects = provideEffects(GlobalPageEffects);
