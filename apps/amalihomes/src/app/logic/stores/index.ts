import { storyblokPageReducer } from './reducers/storyblok.reducers.';
import { applicationDummyDataReducers } from './reducers/image-data';
import { interactionsReducer } from './reducers/interactions.reducer';
import { authReducer } from './reducers/auth.reducer';

import { ApplicationStore } from '../interfaces/app';

export const selectApplicationStore = (store: ApplicationStore) => store;

export const applicationReducer = {
  dummyData: applicationDummyDataReducers,
  interactions: interactionsReducer,
  storyblokPage: storyblokPageReducer,
  auth: authReducer,
};
