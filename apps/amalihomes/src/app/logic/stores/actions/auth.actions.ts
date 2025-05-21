import { createAction, props } from '@ngrx/store';
import { User } from '../../../types/auth';

export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User }>());
export const signupSuccess = createAction('[Auth] Login Success', props<{ user: User }>());
export const activeProfile = createAction('[Auth] Active Profile', props<{ user: User }>());

export const logout = createAction('[Auth] Logout');
