import { createAction, props } from '@ngrx/store';
import { GlobalPageData } from '../../../types/storyblok/global-page';
import { StoryLanguages } from '../../data/constants';

const fetchGlobalData = createAction('[GlobalPage] fetch global page data', props<{ language: StoryLanguages }>());

const fetchGlobalDataSuccess = createAction(
  '[Global] fetch global page data successful',
  props<{ data: GlobalPageData }>(),
);

const fetchGlobalDataFailure = createAction('[GlobalPage] fetch global page failed');

export const GlobalPageActions = {
  fetchGlobalData,
  fetchGlobalDataFailure,
  fetchGlobalDataSuccess,
};
