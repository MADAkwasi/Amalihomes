type ConsentSettingType = 'denied' | 'granted';
export interface ConsentSettings {
  // Performance cookie
  analytics_storage: ConsentSettingType;

  // Targeting cookie
  ad_personalization: ConsentSettingType;

  // Functionality cookie
  functionality_storage: ConsentSettingType;

  // Test Strict cookie
  security_storage: ConsentSettingType;

  // Unclassified cookie
  ad_storage: ConsentSettingType;
  // Unclassified cookie
  ad_user_data: ConsentSettingType;
}

export interface CookieConsent {
  testStrict: boolean;
  performance: boolean;
  targeting: boolean;
  functionality: boolean;
  unclassified: boolean;
}

export enum CookieAcceptanceActions {
  rejectAll = 'reject_all',
  saveSettings = 'save_settings',
  closeBanner = 'close_banner',
}

declare global {
  interface Window {
    dataLayer: any[];
  }
  const gtag: (...args: any[]) => void;
}
