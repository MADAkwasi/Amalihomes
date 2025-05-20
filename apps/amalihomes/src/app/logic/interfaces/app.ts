import { dummyData } from '../stores/mocked-data';
import { StoryblokPageState } from '../stores/reducers/storyblok.reducers.';
import { InteractionsState } from '../stores/reducers/interactions.reducer';
import { AuthState } from '../stores/reducers/auth.reducer';

export interface ApplicationStore {
  dummyData: typeof dummyData;
  storyblokPage: StoryblokPageState;
  interactions: InteractionsState;
  auth: AuthState;
}
