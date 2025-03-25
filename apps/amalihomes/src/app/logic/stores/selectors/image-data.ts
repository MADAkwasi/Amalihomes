import { createSelector } from '@ngrx/store';
import { selectApplicationStore } from '..';

export const selectApplicationImageData = createSelector(selectApplicationStore, (store) => store['image-data']);

export const selectApplicationImageDataByIndex = (index: number) =>
  createSelector(selectApplicationImageData, (data) => data[index]);

export const selectApplicationImageDataByNumber = ({ startIndex, total }: { startIndex: number; total: number }) => {
  if (startIndex < 1) startIndex = 0;
  return createSelector(selectApplicationImageData, (data) => data.slice(startIndex, startIndex + total));
};
