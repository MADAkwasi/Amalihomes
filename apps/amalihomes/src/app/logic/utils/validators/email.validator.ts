import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customEmailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null; // Let "required" handle empty values

  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = emailRegex.test(value);

  return isValid ? null : { invalidEmail: true };
}
