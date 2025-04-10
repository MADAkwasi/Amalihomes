import { createReducer, on } from '@ngrx/store';
import { interactionsActions } from '../actions/interactions.action';

export interface InteractionsState {
  isMenuOpen: boolean;
  isSearching: boolean;
}

const initialState: InteractionsState = {
  isMenuOpen: false,
  isSearching: false,
};

export const interactionsReducer = createReducer(
  initialState,

  on(interactionsActions.openMenu, (state) => ({
    ...state,
    isMenuOpen: true,
  })),

  on(interactionsActions.closeMenu, (state) => ({
    ...state,
    isMenuOpen: false,
  })),

  on(interactionsActions.openSearchField, (state) => ({
    ...state,
    isSearching: true,
  })),

  on(interactionsActions.closeSearchField, (state) => ({
    ...state,
    isSearching: false,
  })),
);
