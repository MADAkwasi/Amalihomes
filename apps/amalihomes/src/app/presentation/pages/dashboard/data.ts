import { Validators } from '@angular/forms';

export const DashboardMessagePriorityOptions = [
  { value: 'high', label: 'High' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'low', label: 'Low' },
];

export const forwardingFieldValidation = [Validators.required, Validators.pattern(/[\S]+/)];

export const mockedSalesePersonnels = [
  { value: 'user_id_1', label: 'Emmanuel Uwimana' },
  { value: 'user_id_2', label: 'James High' },
  { value: 'user_id_3', label: 'Leki Turkson Mwangi' },
  { value: 'user_id_4', label: 'Nina Keller' },
];
