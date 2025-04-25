import { FormControl } from '@angular/forms';
import { customEmailValidator, customNameValidator, customMessageValidator } from './custom.validator';

describe('Custom Validators', () => {
  describe('customEmailValidator', () => {
    it('should return null for a valid email', () => {
      const control = new FormControl('test@example.com');
      expect(customEmailValidator(control)).toBeNull();
    });

    it('should return error object for an invalid email', () => {
      const control = new FormControl('invalid-email');
      expect(customEmailValidator(control)).toEqual({ invalidEmail: true });
    });

    it('should return null for an empty value', () => {
      const control = new FormControl('');
      expect(customEmailValidator(control)).toBeNull();
    });

    it('should return error for email with no domain', () => {
      const control = new FormControl('name@');
      expect(customEmailValidator(control)).toEqual({ invalidEmail: true });
    });

    it('should return error for email with no @ symbol', () => {
      const control = new FormControl('name.example.com');
      expect(customEmailValidator(control)).toEqual({ invalidEmail: true });
    });
  });

  describe('customNameValidator', () => {
    it('should return null for a valid name', () => {
      const control = new FormControl('John Doe');
      expect(customNameValidator(control)).toBeNull();
    });

    it('should return error for a name with numbers', () => {
      const control = new FormControl('John123');
      expect(customNameValidator(control)).toEqual({ invalidName: true });
    });

    it('should return null for an empty value', () => {
      const control = new FormControl('');
      expect(customNameValidator(control)).toBeNull();
    });

    it('should return error for name with special characters', () => {
      const control = new FormControl('John@Doe!');
      expect(customNameValidator(control)).toEqual({ invalidName: true });
    });
  });

  describe('customMessageValidator', () => {
    it('should return null for a message with at least 10 characters', () => {
      const control = new FormControl('This is okay.');
      expect(customMessageValidator(control)).toBeNull();
    });

    it('should return error for a short message', () => {
      const control = new FormControl('Too short');
      expect(customMessageValidator(control)).toEqual({ minlength: true });
    });

    it('should return null for an empty message', () => {
      const control = new FormControl('');
      expect(customMessageValidator(control)).toBeNull();
    });
  });
});
