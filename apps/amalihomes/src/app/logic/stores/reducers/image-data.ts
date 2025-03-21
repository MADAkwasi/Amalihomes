import { createReducer } from '@ngrx/store';
import { ImageData } from '../mocked-data';

export const applicationImageDataReducers = createReducer(ImageData);
