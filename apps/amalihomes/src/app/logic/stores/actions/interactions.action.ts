import { createActionGroup, emptyProps } from '@ngrx/store';

export const interactionsActions = createActionGroup({
  source: 'Interactions',
  events: {
    openMenu: emptyProps(),
    closeMenu: emptyProps(),
    openSearchField: emptyProps(),
    closeSearchField: emptyProps(),
  },
});
