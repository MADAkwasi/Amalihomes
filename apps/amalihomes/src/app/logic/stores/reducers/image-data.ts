import { createReducer } from '@ngrx/store';
import { dummyData } from '../mocked-data';

export const applicationDummyDataReducers = createReducer(dummyData);
