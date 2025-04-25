import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ConsentSettings } from '../../../types/cookies';

const defaultSettings: ConsentSettings = {
  necessary: true,
  analytics_storage: false,
  ad_storage: false,
  ad_user_data: false,
  ad_personalization: false,
};

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private readonly consentKey = 'user_consent_settings';
  private consentSettings = defaultSettings;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadSavedConsent();
    }
  }

  private loadSavedConsent(): void {
    const savedConsent = localStorage.getItem(this.consentKey);
    if (savedConsent) {
      try {
        const consentSettings = JSON.parse(savedConsent);
        this.updateGTMConsent({ ...defaultSettings, ...consentSettings });
      } catch {
        this.updateGTMConsent(defaultSettings);
      }
    } else {
      this.updateGTMConsent(defaultSettings);
    }
  }

  public getConsentSettings() {
    return this.consentSettings;
  }

  public updateConsent(settings: ConsentSettings): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.consentKey, JSON.stringify(settings));
    }
    this.updateGTMConsent(settings);
  }

  private updateGTMConsent(settings: ConsentSettings): void {
    this.consentSettings = settings;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update',
      consent_action: 'update',
      analytics_storage: settings.analytics_storage ? 'granted' : 'denied',
      ad_storage: settings.ad_storage ? 'granted' : 'denied',
      ad_user_data: settings.ad_user_data ? 'granted' : 'denied',
      ad_personalization: settings.ad_personalization ? 'granted' : 'denied',
    });
  }

  public hasConsent(): boolean {
    if (!isPlatformBrowser(this.platformId)) return true;
    return this.consentSettings.analytics_storage || this.consentSettings.ad_user_data;
  }

  public resetConsent(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.consentKey);
    }
  }
}
