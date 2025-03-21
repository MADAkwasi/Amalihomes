import { createSelector } from '@ngrx/store';
import { selectApplicationStore } from '..';

export const selectApplicationImageData = createSelector(selectApplicationStore, (store) => store['image-data']);
