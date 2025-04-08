import { GlobalPageData } from '../../../types/storyblok/global-page';
import { FetchState, StoryLanguages } from '../../data/constants';

export interface GlobalStore {
  data: GlobalPageData | null;
  fetchState: FetchState;
  selectedLanguage: StoryLanguages;
}
