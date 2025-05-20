import { Localization } from '../../logic/data/constants/localization';
import { Body } from '../storyblok';

export interface InteractionsState {
  isMenuOpen: boolean;
  isSearching: boolean;
  filterValues: { filterBy: string; value: string[] }[];
}

export interface StoryblokPageState {
  page: string;
  isFetchingContent: boolean;
  content: Body | null;
  locale: Localization | null;
  error: unknown;
}
