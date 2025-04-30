import { Validators } from '@angular/forms';

export const validators = {
  orderId: [Validators.required, Validators.maxLength(14), Validators.pattern(/^#ORD[0-9]+$/)],
  email: [Validators.required, Validators.email],
  subject: [Validators.required, Validators.pattern(/[\S]+/), Validators.maxLength(90)],
  message: [Validators.required, Validators.pattern(/[\S]+/)],
  question: [Validators.required, Validators.pattern(/[\S]+/)],
};

export const errorMessages: Record<string, string> = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minlength: 'The input is too short',
  maxlength: 'The input is too long',
  pattern: 'The format is invalid',
};
