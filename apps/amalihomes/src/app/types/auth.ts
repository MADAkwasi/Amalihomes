export enum SignupFormFieldsType {
  FullName = 'fullName',
  Email = 'email',
  Password = 'password',
  RePassword = 'rePassword',
}

export type FormErrorKey = 'required' | 'email' | 'minlength' | 'unmatched' | 'termsRequired';
