import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../../../types/auth';

const selectAuthenticatedUserState = createFeatureSelector<AuthState>('auth');

export const selectUserAuthenticationState = createSelector(selectAuthenticatedUserState, (state) => state);
