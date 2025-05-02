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

export const CookieConsentLabelKeys: (keyof CookieConsent)[] = [
  'testStrict',
  'performance',
  'targeting',
  'functionality',
  'unclassified',
];

export enum CookieAcceptanceActions {
  rejectAll = 'reject_all',
  saveSettings = 'save_settings',
  closeBanner = 'close_banner',
}

export enum CookieConsentLabels {
  targeting = 'Targeting',
  performance = 'Performance',
  functionality = 'Functionality',
  unclassified = 'Unclassified',
  testStrict = 'Test Strict',
}

declare global {
  interface Window {
    dataLayer: any[];
  }
  const gtag: (...args: any[]) => void;
}
