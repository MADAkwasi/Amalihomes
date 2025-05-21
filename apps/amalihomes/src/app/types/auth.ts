export enum SignupFormFieldsType {
  FullName = 'fullName',
  Email = 'email',
  Password = 'password',
  RePassword = 'rePassword',
}

export enum LoginFormFieldsType {
  Email = 'email',
  Password = 'password',
}

export type AuthState = {
  user: User | null;
};

export type FormErrorKey = 'required' | 'email' | 'minlength' | 'unmatched' | 'termsRequired';

export type LoginFormErrorKey = 'required' | 'email' | 'minlength';

export type User = {
  email: string;
  email_verified?: boolean;
  full_name: string;
  phone_verified?: boolean;
  sub?: string;
  username?: string;
  phone?: string;
  avatar_url?: string;
  updated_at?: string;
  id?: string;
};
