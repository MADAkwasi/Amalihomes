import { dummyData } from '../stores/mocked-data';
import { AuthState } from '../../types/auth';
import { InteractionsState, StoryblokPageState } from '../../types/store';

export interface ApplicationStore {
  dummyData: typeof dummyData;
  storyblokPage: StoryblokPageState;
  interactions: InteractionsState;
  auth: AuthState;
}
