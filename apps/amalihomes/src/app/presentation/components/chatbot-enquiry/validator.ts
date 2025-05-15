import { Validators } from '@angular/forms';

export const validators = {
  orderId: [Validators.required, Validators.maxLength(14), Validators.pattern(/^#ORD[0-9]+$/)],
  email: [Validators.required, Validators.email],
  product: [Validators.required],
  subject: [Validators.required, Validators.pattern(/[\S]+/), Validators.maxLength(180), Validators.minLength(6)],
  message: [Validators.required, Validators.maxLength(1000), Validators.minLength(6), Validators.pattern(/[\S]+/)],
  question: [Validators.required, Validators.pattern(/[\S]+/)],
};
