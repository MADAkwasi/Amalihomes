import { dummyData } from './mocked-data';
import { storyblokPageReducer } from './reducers/storyblok.reducers.';
import { applicationDummyDataReducers } from './reducers/image-data';
import { interactionsReducer } from './reducers/interactions.reducer';
import { InteractionsState, StoryblokPageState } from '../../types/store';

export interface ApplicationStore {
  dummyData: typeof dummyData; //reducer for dummy data. to be remove in the future
  storyblokPage: StoryblokPageState;
  interactions: InteractionsState;
}

export const selectApplicationStore = (store: ApplicationStore) => store;

export const applicationReducer = {
  dummyData: applicationDummyDataReducers,
  interactions: interactionsReducer,
  storyblokPage: storyblokPageReducer,
};
