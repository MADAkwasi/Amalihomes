import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

const selectAuthenticatedUserState = createFeatureSelector<AuthState>('auth');

export const selectUserAuthenticationState = createSelector(selectAuthenticatedUserState, (state) => state);
