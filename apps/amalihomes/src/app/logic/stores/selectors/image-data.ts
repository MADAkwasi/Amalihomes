import { createSelector } from '@ngrx/store';
import { selectApplicationStore } from '..';

export const selectApplicationDummyData = createSelector(selectApplicationStore, (store) => store.dummyData);

export const selectApplicationDummyDataByIndex = (index: number) =>
  createSelector(selectApplicationDummyData, (data) => data[index]);

export const selectApplicationDummyDataByNumber = ({ startIndex, total }: { startIndex: number; total: number }) => {
  if (startIndex < 1) startIndex = 0;
  return createSelector(selectApplicationDummyData, (data) => data.slice(startIndex, startIndex + total));
};
