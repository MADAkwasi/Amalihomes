import { createReducer, on } from '@ngrx/store';
import { StoryblokPageActions } from '../actions/storyblok.actions';
import { Body } from '../../../types/storyblok';
import { LanguageCode } from '../../data/constants/localization';

export interface StoryblokPageState {
  page: string;
  isFetchingContent: boolean;
  content: Body | null;
  lang: LanguageCode;
  error: unknown;
}

const initialStoryblokPageState: StoryblokPageState = {
  page: '',
  isFetchingContent: false,
  content: null,
  lang: 'en',
  error: null,
};

export const storyblokPageReducer = createReducer(
  initialStoryblokPageState,

  on(StoryblokPageActions.loadPage, (state) => ({
    ...state,
    isFetchingContent: true,
    error: null,
  })),

  on(StoryblokPageActions.loadPageSuccess, (state, { story }) => ({
    ...state,
    page: story.name,
    content: story.content,
    isFetchingContent: false,
  })),

  on(StoryblokPageActions.loadPageFailure, (state, { error }) => ({
    ...state,
    error,
    isFetchingContent: false,
  })),

  on(StoryblokPageActions.changeLanguage, (state, { lang }) => ({
    ...state,
    lang,
  })),
);
