import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, provideEffects } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { StoryblokService } from '../../services/storyblok/storyblok.service';
import { HomePageActions } from '../actions/home-page';
import { HomePageData, HomePageStories } from '../../../types/storyblok/home-page';

@Injectable()
export class HomePageEffects {
  private readonly actions$ = inject(Actions);
  private readonly storyBlok = inject(StoryblokService);

  loadHomePageData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.fetchHomePageData),
      switchMap(({ language }) =>
        from(
          this.storyBlok.getStories<HomePageStories>({
            version: this.storyBlok.version,
            language,
            starts_with: 'home-page/',
          }),
        ).pipe(
          map((data) => {
            return HomePageActions.fetchHomePageDataSuccess({
              data: data.stories.reduce(
                (homePageData, story) => ({ ...homePageData, [story.slug]: story.content }),
                {} as HomePageData,
              ),
            });
          }),
          catchError(() => of(HomePageActions.fetchHomePageDataFailure())),
        ),
      ),
    ),
  );
}

export const provideHomePageEffects = provideEffects(HomePageEffects);
