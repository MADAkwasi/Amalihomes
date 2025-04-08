import { createReducer, on } from '@ngrx/store';
import { GlobalPageActions } from '../actions/global-page';
import { GlobalStore } from '../types/global-page';
import { FetchState, StoryLanguages } from '../../data/constants';

export const GlobalPageReducer = createReducer(
  {
    data: null,
    fetchState: FetchState.DEFAULT,
    selectedLanguage: StoryLanguages.ENGLISH,
  } as GlobalStore,

  on(GlobalPageActions.fetchGlobalData, (state) => ({ ...state, fetchState: FetchState.LOADING })),

  on(GlobalPageActions.fetchGlobalDataSuccess, (state, { data }) => ({
    ...state,
    data,
    fetchState: FetchState.SUCCESS,
  })),

  on(GlobalPageActions.fetchGlobalDataFailure, (state) => ({ ...state, fetchState: FetchState.FAILED })),
);
