import { createReducer, on } from '@ngrx/store';
import { interactionsActions } from '../actions/interactions.action';
import { InteractionsState } from '../../../types/store';

const initialState: InteractionsState = {
  isMenuOpen: false,
  isSearching: false,
  filterValues: [],
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

  on(interactionsActions.updateFilterValues, (state, { filterBy, keyword, checked, action }) => {
    const isSort = action === 'sort';

    if (isSort) {
      const otherFilters = state.filterValues.filter((f) => f.filterBy !== filterBy);
      return {
        ...state,
        filterValues: [...otherFilters, { filterBy, value: [keyword] }],
      };
    }

    const existing = state.filterValues.find((f) => f.filterBy === filterBy);

    if (!existing) {
      return checked
        ? {
            ...state,
            filterValues: [...state.filterValues, { filterBy, value: [keyword] }],
          }
        : state;
    }

    let updatedValues: string[] = [];

    if (checked) {
      updatedValues = existing.value.includes(keyword) ? existing.value : [...existing.value, keyword];
    } else {
      updatedValues = existing.value.filter((v) => v !== keyword);
    }

    const updatedFilterValues =
      updatedValues.length === 0
        ? state.filterValues.filter((f) => f.filterBy !== filterBy)
        : state.filterValues.map((f) => (f.filterBy === filterBy ? { ...f, value: updatedValues } : f));

    return {
      ...state,
      filterValues: updatedFilterValues,
    };
  }),
);
