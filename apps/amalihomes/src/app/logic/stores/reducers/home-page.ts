import { createReducer, on } from '@ngrx/store';
import { HomePageActions } from '../actions/home-page';
import { HomeStore } from '../types/home-page';
import { FetchState } from '../../data/constants';

export const HomePageReducer = createReducer(
  {
    data: null,
    fetchState: FetchState.DEFAULT,
  } as HomeStore,

  on(HomePageActions.fetchHomePageData, (state) => ({ ...state, fetchState: FetchState.LOADING })),

  on(HomePageActions.fetchHomePageDataSuccess, (state, { data }) => ({
    ...state,
    data,
    fetchState: FetchState.SUCCESS,
  })),

  on(HomePageActions.fetchHomePageDataFailure, (state) => ({ ...state, fetchState: FetchState.FAILED })),
);
