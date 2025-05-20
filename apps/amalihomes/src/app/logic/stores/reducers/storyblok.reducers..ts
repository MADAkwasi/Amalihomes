import { createReducer, on } from '@ngrx/store';
import { StoryblokPageActions } from '../actions/storyblok.actions';
import { localization } from '../../data/constants/localization';
import { StoryblokPageState } from '../../../types/store';

const initialStoryblokPageState: StoryblokPageState = {
  page: '',
  isFetchingContent: false,
  content: null,
  locale: null,
  error: null,
};

export const storyblokPageReducer = createReducer(
  initialStoryblokPageState,

  on(StoryblokPageActions.loadPage, (state) => ({
    ...state,
    isFetchingContent: true,
  })),

  on(StoryblokPageActions.loadPageSuccess, (state, { story }) => ({
    ...state,
    page: story.slug,
    content: story.content,
    isFetchingContent: false,
  })),

  on(StoryblokPageActions.loadPageFailure, (state, { error }) => ({
    ...state,
    error,
    isFetchingContent: false,
  })),

  on(StoryblokPageActions.loadUserLocale, (state) => ({
    ...state,
    isFetchingContent: true,
  })),

  on(StoryblokPageActions.loadUserLocaleSuccess, (state, { locale }) => ({
    ...state,
    locale,
    isFetchingContent: false,
  })),

  on(StoryblokPageActions.loadUserLocaleFailure, (state, { error }) => ({
    ...state,
    error,
    isFetchingContent: false,
  })),

  on(StoryblokPageActions.changeLanguage, (state, { langCode, lang }) => ({
    ...state,
    locale: state.locale ? { ...state.locale, languageCode: langCode, language: lang } : localization[0],
  })),

  on(StoryblokPageActions.changeLocale, (state, { locale }) => ({
    ...state,
    locale,
  })),
);
