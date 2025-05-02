import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { ConsentSettings, CookieConsent } from '../../../types/cookies';

const defaultCookieConsent: CookieConsent = {
  targeting: false,
  performance: false,
  functionality: false,
  unclassified: false,
  testStrict: false,
};
@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private readonly consentKey = 'user_consent_settings';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isPlatformBrowser = isPlatformBrowser(this.platformId);
  private isCookieStored = false;
  private cookieSettings = signal<CookieConsent>(defaultCookieConsent);

  constructor() {
    if (this.isPlatformBrowser) {
      this.loadSavedConsent();
    }
  }

  private loadSavedConsent(): void {
    const savedConsent = localStorage.getItem(this.consentKey);
    if (savedConsent) {
      try {
        const consent = JSON.parse(savedConsent);
        this.cookieSettings.set({
          targeting: consent.ad_personalization === 'granted',
          performance: consent.analytics_storage === 'granted',
          functionality: consent.functionality_storage === 'granted',
          unclassified: consent.ad_storage === 'granted' || consent.ad_user_data === 'granted',
          testStrict: consent.security_storage === 'granted',
        });
        this.isCookieStored = true;
      } catch {
        localStorage.removeItem('user_consent_settings');
      }
    }
  }

  public getCookieSettings() {
    return this.cookieSettings();
  }

  public updateConsent(settings: CookieConsent | null): void {
    if (this.isPlatformBrowser) {
      if (!settings) {
        settings = defaultCookieConsent;
      }
      const newSettings: CookieConsent = { ...this.cookieSettings, ...settings };
      const newConsentSettings: ConsentSettings = {
        analytics_storage: newSettings.performance ? 'granted' : 'denied',
        ad_storage: newSettings.unclassified ? 'granted' : 'denied',
        ad_user_data: newSettings.unclassified ? 'granted' : 'denied',
        ad_personalization: newSettings.targeting ? 'granted' : 'denied',
        functionality_storage: newSettings.functionality ? 'granted' : 'denied',
        security_storage: newSettings.testStrict ? 'granted' : 'denied',
      };
      this.cookieSettings.set(newSettings);
      localStorage.setItem(this.consentKey, JSON.stringify(newConsentSettings));
      this.isCookieStored = true;
      gtag('consent', 'update', newConsentSettings);
    }
  }

  public hasConsent(): boolean {
    if (!this.isPlatformBrowser) return true;
    return this.isCookieStored;
  }

  public resetConsent(): void {
    if (this.isPlatformBrowser) {
      localStorage.removeItem(this.consentKey);
      this.isCookieStored = false;
    }
  }
}
