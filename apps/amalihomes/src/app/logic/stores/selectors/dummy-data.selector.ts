import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dummyData } from '../mocked-data';

export const selectProducts = createFeatureSelector<typeof dummyData>('dummyData');

export const selectProductById = (id: string) =>
  createSelector(selectProducts, (state: typeof dummyData) => state.find((product) => product._id === id));
