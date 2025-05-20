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

  on(interactionsActions.updateFilterValues, (state, { filterBy, keyword, checked }) => {
    const existingFilter = state.filterValues.find((f) => f.filterBy === filterBy);

    let updatedFilterValues;

    if (existingFilter) {
      let updatedValues: string[];

      if (checked)
        updatedValues = existingFilter.value.includes(keyword)
          ? existingFilter.value
          : [...existingFilter.value, keyword];
      else updatedValues = existingFilter.value.filter((k) => k !== keyword);

      if (updatedValues.length === 0) updatedFilterValues = state.filterValues.filter((f) => f.filterBy !== filterBy);
      else
        updatedFilterValues = state.filterValues.map((f) =>
          f.filterBy === filterBy ? { ...f, value: updatedValues } : f,
        );
    } else if (checked) updatedFilterValues = [...state.filterValues, { filterBy, value: [keyword] }];
    else updatedFilterValues = state.filterValues;

    return {
      ...state,
      filterValues: updatedFilterValues,
    };
  }),
);
