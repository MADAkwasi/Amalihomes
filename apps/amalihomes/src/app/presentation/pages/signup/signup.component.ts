import { Component, OnInit, ChangeDetectionStrategy, inject, computed, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { SignupFormFieldsType, User, FormErrorKey } from '../../../types/auth';
import { signupValidators } from '../../../logic/utils/validators/auth';
import { AuthService } from '../../../logic/services/firebase/auth.service';
import { Eye, EyeOff } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { InputComponent, ButtonComponent, TextDirective } from '@amalihomes/shared';
import { LucideAngularModule } from 'lucide-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogoComponent } from '../../components/svg-icons/logo/logo.component';
import { RouterLink, Router } from '@angular/router';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { SignUpMetaData } from './static-meta-data';
import { Store } from '@ngrx/store';
import { signupSuccess, activeProfile } from '../../../logic/stores/actions/auth.actions';
import { supabase } from '../../../supabase.client';

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
    TextDirective,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  private readonly pageHeadTags = inject(MetaTagsService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  protected isLoading = false;
  protected isSubmitted = false;
  protected errorMessage = '';
  protected readonly icons = { EyeOff, Eye };
  protected readonly fieldNames = Object.values(SignupFormFieldsType);
  protected form!: FormGroup;

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

  protected passwordVisibility: Record<string, boolean> = {
    password: false,
    rePassword: false,
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        [SignupFormFieldsType.FullName]: new FormControl('', signupValidators.fullName),
        [SignupFormFieldsType.Email]: new FormControl('', signupValidators.email),
        [SignupFormFieldsType.Password]: new FormControl('', signupValidators.password),
        [SignupFormFieldsType.RePassword]: new FormControl('', [Validators.required]),
        terms: new FormControl(false, Validators.requiredTrue),
      },
      {
        validators: this.passwordsMatchValidator(),
      },
    );
    this.pageHeadTags.updateMetaData(SignUpMetaData);
  }

  protected togglePasswordVisibility(field: 'password' | 'rePassword') {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
    this.changeDetectorRef.markForCheck();
  }

  protected isPasswordVisible(field: 'password' | 'rePassword'): boolean {
    return this.passwordVisibility[field];
  }

  protected getControl(field: SignupFormFieldsType | 'terms') {
    return this.form.get(field) as FormControl;
  }

  protected getErrorMessage(field: SignupFormFieldsType | 'terms'): string {
    const control = this.getControl(field);
    if (!control || !control.errors) return '';

    const firstKey = Object.keys(control.errors)[0] as FormErrorKey;
    const fieldConfig = this.formData()?.[field];
    return (fieldConfig?.errorMessages as Record<FormErrorKey, string>)?.[firstKey] ?? 'Invalid';
  }

  protected isErrored(field: SignupFormFieldsType | 'terms'): boolean {
    const control = this.getControl(field);
    return control.invalid && (control.dirty || control.touched || this.isSubmitted);
  }

  protected async onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const { fullName, email, password } = this.form.value;

    this.authService.signUp(fullName, email, password).subscribe({
      next: async ({ data, error }) => {
        this.isLoading = false;

        if (error) {
          this.errorMessage = error.message || 'Signup failed. Please try again.';
          this.changeDetectorRef.markForCheck();
          return;
        }

        if (data?.user) {
          const user = data.user.user_metadata as User;

          this.store.dispatch(signupSuccess({ user }));
          try {
            const { data: profile, error: profileError } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', user.sub)
              .limit(1)
              .single();

            if (profileError) {
              this.errorMessage = 'Error fetching profile. Please try again.';
            } else {
              this.store.dispatch(activeProfile({ user: profile }));
            }
          } catch (e) {
            this.errorMessage = 'Error fetching profile. Please try again. ' + e;
          }
          this.router.navigate(['/']);
          this.changeDetectorRef.markForCheck();
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Unexpected signup error. Please try again.';
        this.changeDetectorRef.markForCheck();
      },
    });
  }

  private passwordsMatchValidator(): ValidatorFn {
    return (group: AbstractControl): { unmatched?: boolean } | null => {
      const password = group.get(SignupFormFieldsType.Password)?.value;
      const rePassword = group.get(SignupFormFieldsType.RePassword)?.value;
      if (password !== rePassword) {
        group.get(SignupFormFieldsType.RePassword)?.setErrors({ unmatched: true });
        return { unmatched: true };
      }
      return null;
    };
  }
}
