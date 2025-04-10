import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoryblokPageState } from '../reducers/storyblok.reducers.';

export const selectStoryblokPageState = createFeatureSelector<StoryblokPageState>('storyblokPage');

export const selectPageContent = createSelector(selectStoryblokPageState, (state) => state.content);

export const selectPageLoadingState = createSelector(selectStoryblokPageState, (state) => state.isFetchingContent);

export const selectPageError = createSelector(selectStoryblokPageState, (state) => state.error);

export const selectLanguage = createSelector(selectStoryblokPageState, (state) => state.lang);

export const selectSection = (section: string) =>
  createSelector(selectStoryblokPageState, (state) => state.content?.body?.find((name) => name.component === section));
