import { ImageData } from './mocked-data';

export interface ApplicationStore {
  'image-data': typeof ImageData;
}

export const selectApplicationStore = (store: ApplicationStore) => store;
