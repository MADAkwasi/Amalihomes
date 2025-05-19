import { dummyData } from './mocked-data';
import { storyblokPageReducer, StoryblokPageState } from './reducers/storyblok.reducers.';
import { applicationDummyDataReducers } from './reducers/image-data';
import { interactionsReducer, InteractionsState } from './reducers/interactions.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';

export interface ApplicationStore {
  dummyData: typeof dummyData;
  storyblokPage: StoryblokPageState;
  interactions: InteractionsState;
  auth: AuthState;
}

export const selectApplicationStore = (store: ApplicationStore) => store;

export const applicationReducer = {
  dummyData: applicationDummyDataReducers,
  interactions: interactionsReducer,
  storyblokPage: storyblokPageReducer,
  auth: authReducer,
};
