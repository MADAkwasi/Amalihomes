import { createSelector } from '@ngrx/store';
import { selectApplicationStore } from '..';
import { GlobalPageData } from '../../../types/storyblok/global-page';
import { GlobalStore } from '../types/global-page';

export const selectGlobalPageData = createSelector(selectApplicationStore, (store) => store.globalPage);

export const selectGlobalPageSectionData = <T extends keyof GlobalPageData>(section: T) => {
  return createSelector(selectGlobalPageData, (store) => (store.data ? store.data[section] : null));
};

export const selectGlobalPageStoreField = <T extends keyof GlobalStore>(field: T) => {
  return createSelector(selectGlobalPageData, (store) => store[field]);
};
