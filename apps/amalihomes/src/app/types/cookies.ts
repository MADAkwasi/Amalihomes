export interface ConsentSettings {
  necessary: boolean;
  analytics_storage: boolean;
  ad_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
