import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { StoryblokService } from '../../services/storyblok/storyblok.service';
import { StoryblokPageActions } from '../actions/storyblok.actions';

@Injectable()
export class StoryblokEffects {
  private readonly actions$ = inject(Actions);
  private readonly storyblokService = inject(StoryblokService);

  loadStoryblokPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoryblokPageActions.loadPage),
      switchMap(({ slug, language, version }) =>
        this.storyblokService.getStoryblokPage(slug, language, version).pipe(
          map((story) => StoryblokPageActions.loadPageSuccess({ story: story.data.story })),
          catchError((error) => of(StoryblokPageActions.loadPageFailure({ error }))),
        ),
      ),
    ),
  );
}
