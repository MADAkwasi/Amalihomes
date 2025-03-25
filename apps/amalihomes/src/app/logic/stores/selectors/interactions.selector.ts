import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InteractionsState } from '../reducers/interactions.reducer';

export const selectInteractionState = createFeatureSelector<InteractionsState>('interactions');

export const selectIsMenuOpen = createSelector(selectInteractionState, (state: InteractionsState) => state.isMenuOpen);
export const selectIsSearching = createSelector(
  selectInteractionState,
  (state: InteractionsState) => state.isSearching,
);
