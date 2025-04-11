export interface Localization {
  country: string;
  countryCode: string;
  language: string;
  languageCode: string;
  direction?: 'ltr' | 'rtl';
}

interface CountryLanguage {
  value: string;
  label: string;
}

export const localization: Localization[] = [
  { country: 'USA', language: 'English', languageCode: 'en', countryCode: 'US', direction: 'ltr' },
  { country: 'Austria', language: 'Deutch', languageCode: 'de', countryCode: 'AT', direction: 'ltr' },
  { country: 'Belgium', language: 'French', languageCode: 'fr', countryCode: 'BE', direction: 'ltr' },
  { country: 'Germany', language: 'Deutch', languageCode: 'de', countryCode: 'DE', direction: 'ltr' },
  { country: 'Switzerland', language: 'Deutch', languageCode: 'de', countryCode: 'CH', direction: 'ltr' },
  { country: 'France', language: 'French', languageCode: 'fr', countryCode: 'FR', direction: 'ltr' },
  { country: 'Italy', language: 'English', languageCode: 'en', countryCode: 'IT', direction: 'ltr' },
  { country: 'Spain', language: 'English', languageCode: 'en', countryCode: 'ES', direction: 'ltr' },
  { country: 'Nigeria', language: 'English', languageCode: 'en', countryCode: 'NG', direction: 'ltr' },
  { country: 'South Africa', language: 'English', languageCode: 'en', countryCode: 'ZA', direction: 'ltr' },
  { country: 'Ghana', language: 'English', languageCode: 'en', countryCode: 'GH', direction: 'ltr' },
  { country: 'Bolivia', language: 'English', languageCode: 'en', countryCode: 'BO', direction: 'ltr' },
  { country: 'Brazil', language: 'English', languageCode: 'en', countryCode: 'BR', direction: 'ltr' },
  { country: 'Canada', language: 'French', languageCode: 'fr', countryCode: 'CA', direction: 'ltr' },
];

export const countries: CountryLanguage[] = localization.map((locale) => ({
  value: locale.countryCode,
  label: `${locale.country} (${locale.languageCode})`,
}));

export const languages: CountryLanguage[] = Array.from(
  new Map(
    localization.map((locale) => [
      locale.languageCode,
      {
        value: locale.languageCode,
        label: locale.language,
      },
    ]),
  ).values(),
);

export type LanguageCode = 'en' | 'fr' | 'de';

// export
