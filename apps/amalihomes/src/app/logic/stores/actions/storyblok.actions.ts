import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ISbComponentType, ISbStoriesParams, ISbStoryData } from 'storyblok-js-client';
import { Localization } from '../../data/constants/localization';

export const StoryblokPageActions = createActionGroup({
  source: 'Storyblok Page',
  events: {
    'Load Page': props<{
      slug: string;
      language: string;
      version: ISbStoriesParams['version'];
      cv?: number;
    }>(),
    'Load Page Success': props<{ story: ISbStoryData<ISbComponentType<string>> }>(),
    'Load Page Failure': props<{ error: unknown }>(),

    'Load User Locale': emptyProps(),
    'Load User Locale Success': props<{ locale: Localization }>(),
    'Load User Locale Failure': props<{ error: unknown }>(),

    'Change Locale': props<{ locale: Localization }>(),
    'Change Language': props<{ langCode: string; lang: string }>(),
  },
});
