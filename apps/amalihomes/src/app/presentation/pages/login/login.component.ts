import { Component, OnInit, ChangeDetectionStrategy, inject, computed, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginFormFieldsType, User, LoginFormErrorKey } from '../../../types/auth';
import { signupValidators } from '../../../logic/utils/validators/auth';
import { AuthService } from '../../../logic/services/firebase/auth.service';
import { Eye, EyeOff } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { InputComponent, ButtonComponent, TextDirective } from '@amalihomes/shared';
import { LucideAngularModule } from 'lucide-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogoComponent } from '../../components/svg-icons/logo/logo.component';
import { RouterLink, Router } from '@angular/router';
import { LogInMetaData } from './static-meta-data';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../../../logic/stores/actions/auth.actions';

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
    RouterLink,
    TextDirective,
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  private readonly pageHeadTags = inject(MetaTagsService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly changeDetectionRef = inject(ChangeDetectorRef);
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  protected isLoading = false;
  protected isSubmitted = false;
  protected errorMessage = '';
  protected readonly icons = { EyeOff, Eye };
  protected readonly fieldNames = Object.values(LoginFormFieldsType);
  protected form!: FormGroup;

  protected readonly formData = computed(() => ({
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
  }));

  protected passwordVisibility: Record<string, boolean> = {
    password: false,
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [LoginFormFieldsType.Email]: new FormControl('', signupValidators.email),
      [LoginFormFieldsType.Password]: new FormControl('', signupValidators.password),
    });
    this.pageHeadTags.updateMetaData(LogInMetaData);
  }

  protected togglePasswordVisibility(field: 'password') {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
    this.changeDetectionRef.markForCheck();
  }

  protected isPasswordVisible(field: 'password'): boolean {
    return this.passwordVisibility[field];
  }

  protected getControl(field: LoginFormFieldsType) {
    return this.form.get(field) as FormControl;
  }

  protected getErrorMessage(field: LoginFormFieldsType): string {
    const control = this.getControl(field);
    if (!control.errors) return '';

    const firstKey = Object.keys(control.errors)[0] as LoginFormErrorKey;
    const fieldConfig = this.formData()?.[field];
    return (fieldConfig?.errorMessages as Record<LoginFormErrorKey, string>)?.[firstKey] ?? 'Invalid';
  }

  protected isErrored(field: LoginFormFieldsType): boolean {
    const control = this.getControl(field);
    return control.invalid && (control.dirty || control.touched || this.isSubmitted);
  }

  protected onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    const { email, password } = this.form.value;

    this.authService.signIn(email, password).subscribe({
      next: ({ data, error }) => {
        if (error) {
          this.errorMessage = error?.message || 'Login failed. Please try again.';
          this.isLoading = false;
          this.changeDetectionRef.markForCheck();
        } else if (data?.user) {
          this.store.dispatch(loginSuccess({ user: data.user.user_metadata as User }));
          this.router.navigate(['/']);
          this.isLoading = false;
        }
      },
      error: (err) => {
        console.error('Unexpected login error:', err);
        this.errorMessage = 'Unexpected error occurred';
        this.isLoading = false;
        this.changeDetectionRef.markForCheck();
      },
    });
  }
}
