import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Validators } from '@angular/forms';

export const signupValidators = {
  fullName: [Validators.required],
  email: [Validators.required, Validators.email],
  password: [Validators.required, Validators.minLength(6)],
};

export const matchPasswordsValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const rePassword = group.get('rePassword')?.value;

  return password === rePassword ? null : { unmatched: true };
};
