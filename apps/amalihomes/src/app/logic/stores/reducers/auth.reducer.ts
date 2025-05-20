import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout, signupSuccess } from '../actions/auth.actions';
import { AuthState } from '../../../types/auth';

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(signupSuccess, (state, { user }) => ({ ...state, user })),
  on(logout, () => initialState),
);
