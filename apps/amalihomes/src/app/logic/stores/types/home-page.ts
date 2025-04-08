import { HomePageData } from '../../../types/storyblok/home-page';
import { FetchState } from '../../data/constants';

export interface HomeStore {
  data: HomePageData | null;
  fetchState: FetchState;
}
