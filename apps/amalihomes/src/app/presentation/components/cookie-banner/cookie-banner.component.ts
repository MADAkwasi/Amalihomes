import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, Check } from 'lucide-angular';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { CookieConsentService } from '../../../logic/services/cookie-consent/cookie-consent.service';
import { CookieConsent, CookieAcceptanceActions } from '../../../types/cookies';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule, LucideAngularModule, TextDirective, ButtonComponent],
  templateUrl: './cookie-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieBannerComponent {
  private readonly firstCookieSetting = viewChild<ElementRef>('firstCookieSetting');
  private readonly cookieService = inject(CookieConsentService);
  private readonly store = inject(Store);
  protected readonly icons = { X, Check };
  protected readonly cookieData = this.store.selectSignal(selectSection('cookie_consent_banner'));
  protected settingsExpanded = false;
  protected showBanner = !this.cookieService.hasConsent();
  private cookieSettings = signal(this.cookieService.getCookieSettings());
  protected availableSettings = computed(() => {
    const labels = this.cookieData()?.cookie_settings.find((item) => item.component === 'cookie_settings');
    if (!labels) return [];
    return Object.keys(this.getActualDataFromStoryBlokStory(labels)).map((key) => {
      const label = labels[key as keyof CookieConsent];
      const enabled = this.cookieSettings()[key as keyof CookieConsent];
      return { label, enabled, key: key as keyof CookieConsent };
    });
  });
  protected readonly acceptanceActions = CookieAcceptanceActions;

  private handleBannerClose() {
    this.showBanner = false;
    this.settingsExpanded = false;
  }

  protected handleSettingsToggle() {
    if (!this.settingsExpanded) {
      this.settingsExpanded = true;
      // Ensures logical navigation flow
      setTimeout(() => {
        this.firstCookieSetting()?.nativeElement.focus();
      }, 0);
    } else {
      this.handleCookieAcceptance(this.acceptanceActions.saveSettings);
    }
  }

  protected handleCookieAcceptance(action: CookieAcceptanceActions) {
    if (action === this.acceptanceActions.rejectAll) {
      this.cookieService.updateConsent(null);
    } else if (action === this.acceptanceActions.saveSettings) {
      this.cookieService.updateConsent(this.cookieSettings());
    }
    this.handleBannerClose();
  }

  protected handleSettingChange(key: keyof CookieConsent) {
    const settings = this.cookieSettings();
    this.cookieSettings.set({
      ...settings,
      [key]: !settings[key],
    });
  }

  private unwantedStoryBlokFields = ['component', '_uid', '_editable'];
  private getActualDataFromStoryBlokStory<T extends object>(data: T) {
    return Object.keys(data)
      .filter((key) => !this.unwantedStoryBlokFields.includes(key))
      .reduce((acc, key) => {
        acc[key as keyof T] = data[key as keyof T];
        return acc;
      }, {} as T);
  }
}
