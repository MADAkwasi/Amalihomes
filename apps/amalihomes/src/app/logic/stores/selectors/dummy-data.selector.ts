import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dummyData } from '../mocked-data';
import { ProductStatus } from '../../../types/chatbot';

export const selectProducts = createFeatureSelector<typeof dummyData>('dummyData');

export const selectProductById = (id: string) =>
  createSelector(selectProducts, (state: typeof dummyData) => state.find((product) => product._id === id));

export const selectSearchResults = (keyword: string) =>
  createSelector(selectProducts, (state: typeof dummyData) =>
    state.filter((product) => product.tags.includes(keyword)),
  );

export const selectNewArrivals = createSelector(selectProducts, (state: typeof dummyData) =>
  state.filter((product) => product.status.includes(ProductStatus.NewArrival)),
);

export const selectTopSellers = createSelector(selectProducts, (state: typeof dummyData) =>
  state.filter((product) => product.status.includes(ProductStatus.TopSeller)),
);

export const selectFlashSales = createSelector(selectProducts, (state: typeof dummyData) =>
  state.filter((product) => product.discount),
);
