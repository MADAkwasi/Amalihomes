import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customEmailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null; // Let "required" handle empty values

  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = emailRegex.test(value);

  return isValid ? null : { invalidEmail: true };
}

export function customNameValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(value) ? null : { invalidName: true };
}

export function customMessageValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  if (value.length < 10) return { minlength: true };
  return null;
}
