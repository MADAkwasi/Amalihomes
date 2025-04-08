import { createSelector } from '@ngrx/store';
import { selectApplicationStore } from '..';
import { HomePageData } from '../../../types/storyblok/home-page';
import { HomeStore } from '../types/home-page';

export const selectHomePageData = createSelector(selectApplicationStore, (store) => store.homePage);

export const selectHomePageSectionData = <T extends keyof HomePageData>(section: T) => {
  return createSelector(selectHomePageData, (store) => (store.data ? store.data[section] : null));
};

export const selectHomePageStoreField = <T extends keyof HomeStore>(field: T) => {
  return createSelector(selectHomePageData, (store) => store[field]);
};
