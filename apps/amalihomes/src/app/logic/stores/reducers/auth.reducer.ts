import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout, signupSuccess } from '../actions/auth.actions';
import { User } from '../../../types/auth';

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(signupSuccess, (state, { user }) => ({ ...state, user })),
  on(logout, () => initialState),
);
