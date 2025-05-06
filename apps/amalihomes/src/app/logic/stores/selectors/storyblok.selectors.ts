import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { StoryblokPageState } from '../reducers/storyblok.reducers.';
import { ISbStoryParams } from 'storyblok-js-client';
import { Body, Section } from '../../../types/storyblok';

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

export function selectSection<T extends object>(
  section: string,
): MemoizedSelector<object, (Section & T) | undefined, (s1: Body | null) => (Section & T) | undefined>;

export function selectSection(
  section: string,
): MemoizedSelector<object, Section | undefined, (s1: Body | null) => Section | undefined>;

export function selectSection(section: string) {
  return createSelector<object, Body | null, Section | undefined>(
    selectPageContent,
    (state) => state?.body?.find((name) => name.component === section) as Section | undefined,
  );
}
