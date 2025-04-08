import { createAction, props } from '@ngrx/store';
import { HomePageData } from '../../../types/storyblok/home-page';
import { StoryLanguages } from '../../data/constants';

const fetchHomePageData = createAction('[HomePage] fetch home page data', props<{ language: StoryLanguages }>());

const fetchHomePageDataSuccess = createAction(
  '[HomePage] fetch home page data successful',
  props<{ data: HomePageData }>(),
);

const fetchHomePageDataFailure = createAction('[HomePage] fetch home page failed');

export const HomePageActions = {
  fetchHomePageData,
  fetchHomePageDataFailure,
  fetchHomePageDataSuccess,
};
