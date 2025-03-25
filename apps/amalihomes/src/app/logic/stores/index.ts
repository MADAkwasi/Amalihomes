import { ImageData } from './mocked-data';
import { applicationImageDataReducers } from './reducers/image-data';
import { interactionsReducer, InteractionsState } from './reducers/interactions.reducer';

export interface ApplicationStore {
  'image-data': typeof ImageData;
  interactions: InteractionsState;
}

export const selectApplicationStore = (store: ApplicationStore) => store;

export const applicationReducer = {
  'image-data': applicationImageDataReducers,
  interactions: interactionsReducer,
};
