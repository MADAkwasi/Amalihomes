import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SaleRepComponent } from '../sales-rep/sales-rep.component';
import { TextDirective } from '../../directives/text/text.directive';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../text-input/text-input.component';
import { ButtonComponent } from '../button/button.component';
import {
  customEmailValidator,
  customMessageValidator,
  customNameValidator,
} from '../../../logic/utils/validators/custom.validator';
import { CircleX, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'lib-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    SaleRepComponent,
    TextDirective,
    LucideAngularModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './contact-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  public readonly position = input<'form-first' | 'form-last'>('form-last');
  public readonly bgImg = input<string>();
  public readonly bgColor = input<string>();
  private readonly fb = inject(FormBuilder);
  protected readonly errorIcon = CircleX;
  protected readonly contactFormControls = {
    name: new FormControl('', [Validators.required, customNameValidator]),
    email: new FormControl('', [Validators.required, customEmailValidator]),
    message: new FormControl('', [Validators.required, customMessageValidator]),
  };
  protected contactForm = this.fb.group(this.contactFormControls);

  protected getErrorMessage(control: FormControl, fieldName?: string): string {
    if (!control?.errors) return '';

    const errorMessages: Record<string, string> = {
      required: 'This is a required field',
      invalidName: 'Name must be at least 3 characters long and contain only letters and spaces',
      invalidEmail: 'Please enter a valid email address',
      minlength: 'The input is too short',
      maxlength: 'The input is too long',
      pattern: 'The format is invalid',
    };

    if (fieldName === 'message' && control.hasError('minlength')) {
      return 'Your message is too short';
    }

    const firstErrorKey = Object.keys(control.errors)[0];
    return errorMessages[firstErrorKey] || 'Invalid field';
  }

  protected onSubmit() {
    return;
  }
}
