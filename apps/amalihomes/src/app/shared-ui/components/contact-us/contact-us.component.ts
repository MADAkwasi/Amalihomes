import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
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
import { Store } from '@ngrx/store';
import {
  selectLocale,
  selectPageLoadingState,
  selectSection,
} from '../../../logic/stores/selectors/storyblok.selectors';
import { StoryblokForm } from '../../../types/storyblok';
import { errors } from '../../../logic/data/constants/errors';
import { LanguageCode } from '../../../logic/data/constants/localization';

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
  private readonly store = inject(Store);
  private readonly currentLocale = this.store.selectSignal(selectLocale);
  protected readonly isLoadingContent = this.store.selectSignal(selectPageLoadingState);
  protected readonly contactUsContent = this.store.selectSignal(selectSection('contact'));
  public readonly position = input<'form-first' | 'form-last'>('form-last');
  public readonly bgImg = input<string | null>(null);
  public readonly bgColor = input<string | null>(null);
  private readonly fb = inject(FormBuilder);
  protected readonly errorIcon = CircleX;
  protected readonly formContent = signal<StoryblokForm[]>([]);
  protected readonly errors = signal(errors);

  constructor() {
    effect(() => this.formContent.set(this.contactUsContent()?.contactForm as StoryblokForm[]));
  }

  protected readonly contactFormControls = {
    name: new FormControl('', [Validators.required, customNameValidator]),
    email: new FormControl('', [Validators.required, customEmailValidator]),
    message: new FormControl('', [Validators.required, customMessageValidator]),
  };
  protected contactForm = this.fb.group(this.contactFormControls);

  protected getErrorMessage(control: FormControl, fieldName?: string): string {
    if (!control?.errors) return '';

    const langCode = (this.currentLocale()?.languageCode ?? 'en') as LanguageCode;
    const errorMessages = this.errors()[langCode];

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
