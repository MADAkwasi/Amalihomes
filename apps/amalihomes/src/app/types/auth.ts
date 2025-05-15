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

export type FormErrorKey = 'required' | 'email' | 'minlength' | 'unmatched' | 'termsRequired';

export type LoginFormErrorKey = 'required' | 'email' | 'minlength';
