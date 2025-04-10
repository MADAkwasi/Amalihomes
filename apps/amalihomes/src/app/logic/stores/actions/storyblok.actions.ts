import { createActionGroup, props } from '@ngrx/store';
import { ISbComponentType, ISbStoriesParams, ISbStoryData } from 'storyblok-js-client';
import { LanguageCode } from '../../data/constants/localization';

export const StoryblokPageActions = createActionGroup({
  source: 'Storyblok Page',
  events: {
    'Load Page': props<{
      slug: string;
      language: LanguageCode;
      version: ISbStoriesParams['version'];
      cv?: number;
    }>(),
    'Load Page Success': props<{ story: ISbStoryData<ISbComponentType<string>> }>(),
    'Load Page Failure': props<{ error: unknown }>(),

    'Change Language': props<{ lang: LanguageCode }>(),
  },
});
