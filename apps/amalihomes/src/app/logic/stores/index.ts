import { ImageData } from './mocked-data';
import { GlobalPageReducer } from './reducers/global-page';
import { HomePageReducer } from './reducers/home-page';
import { applicationImageDataReducers } from './reducers/image-data';
import { interactionsReducer, InteractionsState } from './reducers/interactions.reducer';
import { GlobalStore } from './types/global-page';
import { HomeStore } from './types/home-page';

export interface ApplicationStore {
  'image-data': typeof ImageData;
  interactions: InteractionsState;
  homePage: HomeStore;
  globalPage: GlobalStore;
}

export const selectApplicationStore = (store: ApplicationStore) => store;

export const applicationReducer = {
  'image-data': applicationImageDataReducers,
  interactions: interactionsReducer,
  homePage: HomePageReducer,
  globalPage: GlobalPageReducer,
};
