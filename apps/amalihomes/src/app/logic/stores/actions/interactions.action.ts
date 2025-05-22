import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const interactionsActions = createActionGroup({
  source: 'Interactions',
  events: {
    openMenu: emptyProps(),
    closeMenu: emptyProps(),
    openSearchField: emptyProps(),
    closeSearchField: emptyProps(),
    updateFilterValues: props<{ filterBy: string; keyword: string; checked?: boolean; action: 'filter' | 'sort' }>(),
  },
});
