import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectUserAuthenticationState } from 'apps/amalihomes/src/app/logic/stores/selectors/auth.selector';

import { ImageComponent, ButtonComponent } from '@amalihomes/shared';
import { InputComponent } from '../../../../shared-ui/components/text-input/text-input.component';
import { PhoneInputComponent } from '../../../../shared-ui/components/phone-input/phone-input.component';
import { supabase } from 'apps/amalihomes/src/app/logic/services/supabase/supabase.service';
import { activeProfile } from 'apps/amalihomes/src/app/logic/stores/actions/auth.actions';

@Component({
  selector: 'app-personal-overview',
  standalone: true,
  imports: [CommonModule, ImageComponent, ButtonComponent, InputComponent, PhoneInputComponent],
  templateUrl: './personal-overview.component.html',
})
export class PersonalOverviewComponent {
  private store = inject(Store);
  protected authenticatedUser = this.store.selectSignal(selectUserAuthenticationState);

  public form = new FormGroup({
    fullName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    countryCode: new FormControl('+233'),
  });

  profilePhoto = computed(() => this.authenticatedUser()?.user?.avatar_url || this.avatarUrl);
  avatarUrl: string | null = null;

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (!file) return;

    const { data: userResponse, error: userError } = await supabase.auth.getUser();
    if (userError || !userResponse?.user) return;

    const user = userResponse.user;

    const fileExt = file.name.split('.').pop();
    const filePath = `${user.id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file, {
      upsert: false,
    });
    if (uploadError) return;

    const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
    this.avatarUrl = publicUrlData.publicUrl;

    const { data: upsertData, error: upsertError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        avatar_url: this.avatarUrl,
      })
      .select();

    if (upsertError) return;
    if (upsertData && upsertData[0]) {
      this.store.dispatch(activeProfile({ user: upsertData[0] }));
    }
  }

  async removeProfilePhoto() {
    const { data: userResponse, error: userError } = await supabase.auth.getUser();
    if (userError || !userResponse?.user) return;

    this.avatarUrl = null;

    const { data: upsertData, error } = await supabase
      .from('profiles')
      .upsert({
        id: userResponse.user.id,
        avatar_url: null,
      })
      .select();

    if (error) return;
    if (upsertData && upsertData[0]) {
      this.store.dispatch(activeProfile({ user: upsertData[0] }));
    }
  }

  constructor() {
    this.initializeForm();
  }
  private initializeForm() {
    const user = this.authenticatedUser()?.user;
    const fullPhone = user?.phone ?? '';
    const [countryCodeRaw, localPhoneRaw] = fullPhone.split(' ');

    const formattedCountryCode = countryCodeRaw ? `+${countryCodeRaw}` : '+233';
    const formattedPhone = localPhoneRaw?.startsWith('0') ? localPhoneRaw : `${localPhoneRaw}`;
    this.form.patchValue({
      fullName: user?.full_name || '',
      username: user?.username || '',
      email: user?.email || '',
      phone: formattedPhone || '',
      countryCode: formattedCountryCode,
    });
  }

  phoneNumber = computed(() => {
    const rawPhone = this.form.get('phone')?.value?.replace(/\D/g, '') || '';
    const sanitizedPhone = rawPhone.replace(/^0/, '');
    const countryCode = this.form.get('countryCode')?.value?.replace('+', '') || '233';
    return `${countryCode} ${sanitizedPhone}`;
  });

  async onSubmit() {
    const formValues = this.form.getRawValue();
    const phone = this.phoneNumber();

    const { data: userResponse, error: userError } = await supabase.auth.getUser();
    if (userError || !userResponse?.user) return;

    const updates = {
      id: userResponse.user.id,
      full_name: formValues.fullName || this.authenticatedUser()?.user?.full_name,
      avatar_url: this.avatarUrl || this.authenticatedUser()?.user?.avatar_url,
      phone: phone,
      username: formValues.username,
      email: this.authenticatedUser()?.user?.email,
    };

    const { data, error } = await supabase.from('profiles').upsert(updates).select();

    if (error) {
      return;
    } else {
      const updatedUser = this.authenticatedUser()?.user;
      if (updatedUser) {
        this.store.dispatch(activeProfile({ user: data[0] }));
      }
    }
  }

  updateCountryCode(code: string) {
    this.form.controls['countryCode'].setValue(code);
  }
}
