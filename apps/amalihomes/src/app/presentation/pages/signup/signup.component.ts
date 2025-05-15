import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
  computed,
  DestroyRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupFormFieldsType } from '../../../types/auth';
import { signupValidators } from '../../../logic/utils/validators/auth';
import { AuthService } from '../../../logic/services/firebase/auth.service';
import { Eye, EyeOff } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { InputComponent, ButtonComponent } from '@amalihomes/shared';
import { LucideAngularModule } from 'lucide-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormErrorKey } from '../../../types/auth';
import { LogoComponent } from '../../components/svg-icons/logo/logo.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
    LucideAngularModule,
    LogoComponent,
  ],
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly cdRef = inject(ChangeDetectorRef);

  protected readonly icons = { EyeOff, Eye };
  protected readonly fieldNames = Object.values(SignupFormFieldsType);
  protected form!: FormGroup;
  protected isSubmitted = false;

  protected readonly formData = computed(() => ({
    fullName: {
      label: 'Full Name',
      placeholder: 'Enter your full name',
      errorMessages: { required: 'Full name is required' },
    },
    email: {
      label: 'Email Address',
      placeholder: 'Enter your email',
      errorMessages: {
        required: 'Email is required',
        email: 'Enter a valid email',
      },
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your password',
      errorMessages: {
        required: 'Password is required',
        minlength: 'Minimum 6 characters required',
      },
    },
    rePassword: {
      label: 'Re-enter Password',
      placeholder: 'Re-enter your password',
      errorMessages: {
        required: 'Re-entering password is required',
        unmatched: 'Passwords do not match',
      },
    },
    terms: {
      label: 'I have read and agree to the Terms & Conditions and Privacy Policy.',
      errorMessages: {
        required: 'You must agree to the Terms & Conditions',
      },
    },
  }));

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [SignupFormFieldsType.FullName]: new FormControl('', signupValidators.fullName),
      [SignupFormFieldsType.Email]: new FormControl('', signupValidators.email),
      [SignupFormFieldsType.Password]: new FormControl('', signupValidators.password),
      [SignupFormFieldsType.RePassword]: new FormControl('', signupValidators.password),
      terms: new FormControl(false, Validators.requiredTrue),
    });
  }
  protected passwordVisibility: Record<string, boolean> = {
    password: false,
    rePassword: false,
  };

  togglePasswordVisibility(field: 'password' | 'rePassword') {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
    this.cdRef.markForCheck();
  }

  isPasswordVisible(field: 'password' | 'rePassword'): boolean {
    return this.passwordVisibility[field];
  }

  protected getControl(field: SignupFormFieldsType | 'terms') {
    return this.form.get(field) as FormControl;
  }

  protected getErrorMessage(field: SignupFormFieldsType | 'terms'): string {
    const control = this.getControl(field);
    if (!control.errors) return '';

    const firstKey = Object.keys(control.errors)[0] as FormErrorKey;
    const fieldConfig = this.formData()?.[field];
    return (fieldConfig?.errorMessages as Record<FormErrorKey, string>)?.[firstKey] ?? 'Invalid';
  }

  protected isErrored(field: SignupFormFieldsType | 'terms'): boolean {
    const control = this.getControl(field);
    return control.invalid && (control.dirty || control.touched || this.isSubmitted);
  }

  protected onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    const { fullName, email, password } = this.form.value;
    this.authService.signUp(fullName, email, password).subscribe({
      next: ({ data, error }) => {
        if (error) {
          alert(error.message);
        } else {
          console.log(data);
        }
      },
    });
  }
}
