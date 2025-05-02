import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoryblokPageState } from '../reducers/storyblok.reducers.';
import { ISbStoryParams } from 'storyblok-js-client';

const draft: ISbStoryParams['version'] = 'draft';

export const selectStoryblokPageState = createFeatureSelector<StoryblokPageState>('storyblokPage');

export const selectPageContent = createSelector(selectStoryblokPageState, (state) => state.content);

export const selectPageLoadingState = createSelector(selectStoryblokPageState, (state) => state.isFetchingContent);

export const selectPageError = createSelector(selectStoryblokPageState, (state) => state.error);

export const selectLocale = createSelector(selectStoryblokPageState, (state) => state.locale);

export const selectSelectedSlugAndVersion = createSelector(selectStoryblokPageState, (state) => ({
  slug: state.page,
  version: draft,
}));

export const selectSection = (section: string) =>
  createSelector(selectPageContent, (state) => state?.body?.find((name) => name.component === section));
