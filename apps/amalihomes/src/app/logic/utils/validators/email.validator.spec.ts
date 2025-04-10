import { customEmailValidator } from './email.validator';
import { FormControl } from '@angular/forms';

describe('customEmailValidator', () => {
  it('should return null for a valid email', () => {
    const control = new FormControl('test@example.com');
    const result = customEmailValidator(control);
    expect(result).toBeNull();
  });

  it('should return error object for an invalid email', () => {
    const control = new FormControl('invalid-email');
    const result = customEmailValidator(control);
    expect(result).toEqual({ invalidEmail: true });
  });

  it('should return null for an empty value', () => {
    const control = new FormControl('');
    const result = customEmailValidator(control);
    expect(result).toBeNull(); // assuming required validator handles empty
  });

  it('should return error for email with no domain', () => {
    const control = new FormControl('name@');
    const result = customEmailValidator(control);
    expect(result).toEqual({ invalidEmail: true });
  });

  it('should return error for email with no @ symbol', () => {
    const control = new FormControl('name.example.com');
    const result = customEmailValidator(control);
    expect(result).toEqual({ invalidEmail: true });
  });
});
